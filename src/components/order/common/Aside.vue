<template>
  <div class="aside-wrap" @click.self="closeAsideFn" @touchmove.prevent>
    <div class="main">
      <p class="g-cen-y">以下协议一经签订即可生效，请务必确认协议内容及条款</p>
      <ul v-ScrollMove>
        <li class="g-cen-y g-border" v-for="(m,i) in arr" :key="i">
          <i class="iconfont icon-dui"></i>
          <span>借款协议</span>
        </li>
      </ul>
      <footer class="btn-box g-fen-box">
        <span class="g-cen-y"><i class="iconfont icon-dui"></i>全选</span>
        <button>我已知晓并确认</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'asides',
  props :{
    arr : {
      type :Array,
      default : function(){return []}
    }
  },
  data () {
    return {
    }
  },
  methods : {
    closeAsideFn () {
      this.$emit('closeAsideFn')
    }
  }
}
</script>
<style lang="scss" scoped>
.aside-wrap{
  position: fixed;
  left:0;
  top:0;
  bottom: 0;
  right:0;
  background: rgba(0,0,0,0.7);
  display: flex;
  justify-content: flex-end;
  .main{
    background:$col-f;
    width: 446px;
    height: 100%;
    display: flex;
    flex-direction: column;
    p{
      height: 96px;
      background: $col-e;
      color:$col-6;
      font-size: 20px;
      line-height: 30px;
      padding: 0 30px;
    }
    .btn-box{
      height: 104px;
      padding:10px 10px 28px;
      span{
        color: $col-6;
        font-size: 30px;
        i{
          font-size: 48px;
        }
      }
      button{
        background: $col-blue;
        color:$col-f;
        height: 64px;
        border: none;
        border-radius: 4px;
        width: 256px;
        font-size: 30px;
      }
    }
    ul{
      width:100%;
      flex:1;
      overflow-y: scroll;
      padding-left: 20px;
      li{
        line-height: 80px;
        i{
          font-size: 48px;
          color:$col-9;
        }
        span{
         font-size: 28px;
         color:$col-blue;
        }
      }
    }
  }
}
</style>
