<template>
  <div class="aside-wrap" @click.self="closeAsideFn" @touchmove.prevent>
    <div class="main">
      <p class="g-cen-y">以下协议一经签订即可生效，请务必确认协议内容及条款</p>
      <ul v-ScrollMove>
        <li class="g-cen-y g-border" v-for="(m,i) in arr" :key="i" ref="list">
          <i class="iconfont" :class="{'on icon-dui1':m.isCheck,'icon-dui':!m.isCheck}" @click="clickFn(m,i)"></i>
          <a :href="m.url" class="g-text-ove1">{{m.name}}</a>
        </li>
      </ul>
      <footer class="btn-box g-fen-box">
        <span class="g-cen-y" @click="clickAll(false)"><i class="iconfont" :class="{'on icon-dui1':allAsync,'icon-dui':!allAsync}"></i>全选</span>
        <button :disabled="!allAsync" :class="{'on':allAsync}">我已知晓并确认</button>
      </footer>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'asides',
  props :{
    arr : {
      type :Array,
      default : function(){return []}
    },
    name : {
      type :String,
      default : ''
    },
    async : {
      type :Boolean,
      default : function(){return false}
    }
  },
  data () {
    return {
      allAsync : false
    }
  },
  computed :{
    fullName: function () {
      

    }
  },
  methods : {
    closeAsideFn () {
      this.$emit('closeAsideFn',this.arr,this.name,this.allAsync);
    },
    clickFn (obj,index) {
      // let num =0;
      this.$nextTick(() =>{
        Vue.set(obj,'isCheck',!obj.isCheck);
      });
      // this.arr.map((m,i) =>{
      //   //对每项 取反
      //   if(m.name == obj.name){
      //     m.isCheck = !obj.isCheck;
      //   }

      //   //记录选中几个
      //   if(m.isCheck){num++};
      // });

      // //如果全选中 判定全选;
      // this.allAsync = num == this.arr.length;
    },
    //点击全选
    clickAll (async) {
      //判断 默认还是点击
      this.allAsync = async ? true: !this.allAsync;
      //遍历所有
      this.arr.map((m,i) =>{
        m.isCheck = this.allAsync;
      });
    }
  },
  mounted () {
    //判断是否全选
    if(this.async){
      this.clickAll(true);
    } else{
      this.clickFn({});
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
          &.on{
            color:$col-blue;
          }
        }
      }
      button{
        background: $col-9;
        color:$col-f;
        height: 64px;
        border: none;
        border-radius: 4px;
        width: 256px;
        font-size: 30px;
        &.on{
          background: $col-blue;
        }
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
          &.on{
            color:$col-blue;
          }
        }
        a{
         font-size: 28px;
         color:$col-blue;
        }
      }
    }
  }
}
</style>
