<template>
  <div class="bank-wrap" >
    <!-- 提醒文字 -->
    <section class="remind-box">
      <p class="icon-box"><i class="iconfont icon-tixing"></i></p>
      <p class="text-box">您已经开通华夏银行存管账户，并绑定一下银行卡，请选择一张您的常用银行卡，补全银行卡信息进行认证。认证成功的银行卡将作为您的还款银行卡。</p>
    </section>
    <!-- 银行卡列表 -->
    <section class="bank-box">
      <ul class="list-box">
        <li>
          <dl class="g-cen-y">
            <dt class="g-back" style="background-image:url(/static/images/order/fuwu-icon.png)"></dt>
            <dd>
              <h4 class="g-fen-cen">
                <span>建设银行</span>
                <span>我的主卡</span>
              </h4>
              <p>136****0678</p>
            </dd>
          </dl>
          <div class="bank-num">
            <span>3124</span>
            <span>42442</span>
            <span>2424</span>
            <span>4242</span>
          </div>
          <p class="text">
            <i></i>
            <span>华夏银行存管保障中</span>
          </p>
        </li>
        <li></li>
      </ul>
    </section>
    <!-- 添加银行卡 -->
    <section class="add-bank g-fen-cen-box">
      <span class="g-cen-y">
        <i class="iconfont icon-jia"></i>添加银行卡
      </span>
      <span><i class="iconfont icon-jiao-rig"></i></span>
    </section>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'bank',
  data () {
    return {
      allAsync : false
    }
  },
  methods : {
    
  }
}
</script>
<style lang="scss" scoped>
.bank-wrap{
  .remind-box{
    padding:20px 30px;
    background:$col-yel;
    color:$col-red;
    display: flex;
    .icon-box{
      padding-right:20px;
      i{
        font-size: 40px;
      }
    }
    .text-box{
      font-size: 24px;
      line-height: 34px;
    }
  }
  .bank-box{
    padding:20px 30px;
    .list-box{
      li{
        background:$col-f;
        padding:30px 0 20px 30px;
        border-radius: 12px;
        dl{
          dt{
            height: 54px;
            width: 54px;
            margin-right: 20px;
          }
          dd{
            width:0;
            flex:1;
            h4{
              padding:0 30px 4px 0;
              span{
                &:first-child{
                  font-size: 26px;
                }
                &:last-child{
                  font-size: 24px;
                  color:$col-blue;
                  text-align: center;
                }
              }
            }
            p{
              font-size: 24px;
              color:$col-9;
            }
          }
        }
        &>p{
          color:$col-green;
        }
      }
    }
  }
  .add-bank{
    height: 110px;
    padding: 0 30px;
    background: $col-f;
    span{
      font-size: 30px;
      color:$col-3;
      &:first-child{
        i{
          font-size: 50px;
          color:$col-6;
          padding-right: 20px;
        }
      }
      &:last-child{
        i{
          font-size: 30px;
          color:$col-9;
        }
      }
    }
  }
}
</style>
