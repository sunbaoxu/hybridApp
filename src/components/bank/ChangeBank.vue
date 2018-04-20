<template>
  <div class="bank-wrap" >
    <!-- 提醒文字 -->
    <section class="remind-box">
      <p class="icon-box"><i class="iconfont icon-tixing"></i></p>
      <p class="text-box">您已经开通华夏银行存管账户，并绑定以下银行卡，请选择一张您的常用银行卡，补全银行卡信息进行认证。认证成功的银行卡将作为您的还款银行卡。</p>
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
                <span class="g-back"></span>
              </h4>
              <p>136****0678</p>
            </dd>
          </dl>
          <div class="bank-num g-cen-y g-border">
            <span>3124</span>
            <span>4242</span>
            <span class="g-fen-cen">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </span>
            <span>4242</span>
          </div>
          <p class="text g-cen-y yes">
            <i></i>
            <router-link to="/bank/accountDetails">华夏银行存管保障中</router-link>
          </p>
        </li>
        <li>
          <dl class="g-cen-y">
            <dt class="g-back" style="background-image:url(/static/images/order/fuwu-icon.png)"></dt>
            <dd>
              <h4 class="g-fen-cen">
                <span>建设银行</span>
                <span class="g-back"></span>
              </h4>
              <p>136****0678</p>
            </dd>
          </dl>
          <div class="bank-num g-cen-y g-border">
            <span>3124</span>
            <span>4242</span>
            <span class="g-fen-cen">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </span>
            <span>4242</span>
          </div>
          <p class="text g-cen-y etc">
            <i></i>
            <router-link to="/bank/accountDetails">华夏银行存管保障中</router-link>
          </p>
        </li>
        <li>
          <dl class="g-cen-y">
            <dt class="g-back" style="background-image:url(/static/images/order/fuwu-icon.png)"></dt>
            <dd>
              <h4 class="g-fen-cen">
                <span>建设银行</span>
                <span class="g-back"></span>
              </h4>
              <p>136****0678</p>
            </dd>
          </dl>
          <div class="bank-num g-cen-y g-border">
            <span>3124</span>
            <span>4242</span>
            <span class="g-fen-cen">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </span>
            <span>4242</span>
          </div>
          <p class="text g-cen-y no">
            <i></i>
            <router-link to="/bank/accountDetails">华夏银行存管保障中</router-link>
          </p>
        </li>
        <li>
          <dl class="g-cen-y">
            <dt class="g-back" style="background-image:url(/static/images/order/fuwu-icon.png)"></dt>
            <dd>
              <h4 class="g-fen-cen">
                <span>建设银行</span>
                <span class="g-back"></span>
              </h4>
              <p>136****0678</p>
            </dd>
          </dl>
          <div class="bank-num g-cen-y g-border">
            <span>3124</span>
            <span>4242</span>
            <span class="g-fen-cen">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </span>
            <span>4242</span>
          </div>
          <p class="text g-cen-y no">
            <i></i>
            <router-link to="/bank/accountDetails">华夏银行存管保障中</router-link>
          </p>
        </li>
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
  padding-top:140px;
  .remind-box{
    padding:20px 30px;
    background:$col-yel;
    color:$col-red;
    display: flex;
    position: fixed;
    left:0;
    top:0;
    width: 100%;
    z-index: 5;
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
        margin-bottom: 20px;
        dl{
          height: 66px;
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
                  font-size: 28px;
                }
                &:last-child{
                  background-image: url('/static/images/bank/user-bank.png');
                  width:96px;
                  height: 34px;
                }
              }
            }
            p{
              font-size: 24px;
              color:$col-9;
            }
          }
        }
        .bank-num{
          height: 118px;
          font-size: 40px;
          color:$col-6;
          font-weight: bold;
          span{
            margin-right: 40px;
            width:90px;
            i{
             width:14px;
             height: 14px;
             background: $col-9;
             border-radius: 100%;
            }
          }
        }
        &>p{
          font-size: 26px;
          padding-top:20px;
          i{
            height: 30px;;
            width: 26px;
            margin:0 20px;
          }
          a{
            text-decoration: underline;
          }
          &.yes{
            i{
              background-image: url('/static/images/bank/bank-yes.png');
            }
            a{
              color:$col-green;
            }
          }
          &.no{
            i{
              background-image: url('/static/images/bank/bank-no.png');
            }
            a{
              color:$col-red;
            }
          }
          &.etc{
            i{
              background-image: url('/static/images/bank/bank-etc.png');
            }
            a{
              color:$col-yel;
            }
          }
        }
      }
    }
  }
  .add-bank{
    height: 110px;
    padding: 0 30px;
    background: $col-f;
    span{
      font-size: 32px;
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
