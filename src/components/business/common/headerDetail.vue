<template>
  <header class="header-detail">
      <dl class="g-cen-y">
        <dt class="g-back" :style="{'background-image':'url('+obj.orgImgPath+')'}"></dt>
        <dd>
          <h4 class="g-text-ove1">{{obj.orgShortName}}</h4>
          <p class="g-text-ove1">商家地址：{{obj.orgAddrDetailed}}</p>
        </dd>
      </dl>
      <p class="text" :class="{'g-text-ove2':!moreAsync}">{{obj.remark}}</p>
      <p class="more g-cen-cen" @click="clickMore">
        <i class="iconfont icon-jiao-bot" :class="{'on':!moreAsync}"></i>
        <span>{{moreText}}</span>
      </p>
  </header>
</template>

<script>
export default {
  name: 'detail',
  props : {
    obj :{
      type:Object ,
      default:function(){return {}}
    }
  },
  data () {
    return {
      moreAsync : false,
      moreText  : '查看更多'
    }
  },
  methods : {
    clickMore () {
      this.moreAsync = !this.moreAsync;
      this.moreText  = this.moreAsync ? '收起更多' :'查看更多';
    }
  }
}
</script>
<style lang="scss" scoped>
.header-detail{
    background: $col-f;
    padding:30px;
    box-sizing: border-box;
    margin-bottom: 20px;
    dl{
      display: flex;
      width:100%;
      height: 100px;
      dt{
        width: 100px;
        height: 100px;
        border-radius: 100%;
        margin-right: 22px;
        border:1px solid $col-c;
      }
      dd{
        width:0;
        flex:1;
        h4{
          font-size: 26px;
          color:$col-blue;
        }
        p{
          font-size: 24px;
          color:$col-9;
        }
      }
    }
    &>.text{
      padding: 28px 26px 0;
      line-height: 46px;
      font-size: 20px;
      color:$col-6;
      margin-bottom: 20px;
      display: -webkit-box;
    }
    .more{
      height: 28px;
      font-size: 20px;
      color:$col-9;
      i{
        font-size: 30px;
        margin-right:6px;
        &.on{
          transform:rotate(180deg);
        }
      }
    }
  }
</style>
