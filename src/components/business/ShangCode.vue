<template>
  <div class="code-wrap">
    <p>
      <input 
        type="text" 
        placeholder="请输入商家推荐码" 
        v-model="text" 
        v-on:input ="changFn"
        maxlength="11">
    </p>
    <p>
      <button :class="{on:btnAsync}" @click="submitFn" :disabled="!btnAsync">下一步</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'shangCode',
  data () {
    return {
      text:'',
      btnAsync :false
    }
  },
  methods : {
    //用户输入内容
    changFn () {
      if(this.text.length >=6 && this.text.length <=11){
        this.btnAsync = true;
      } else{
        this.btnAsync = false;
      }
    },
    //下一步
    submitFn () {
      this.$router.push('/shangList');
    }
  }
}
</script>
<style lang="scss" scoped>
.code-wrap{
  padding-top:20px;
  p{
    &:first-child{
      height: 108px;
      border-bottom: 1px solid #e5e5e5;
      input{
        padding-left:30px;
        width:100%;
        box-sizing: border-box;
        height: 100%;
        border:none;
        background: $col-f;
        font-size: 30px;
      }
    }
    &:last-child{
      padding:280px 30px 0;
      box-sizing: border-box;
      button{
        width:100%;
        color:$col-f;
        font-size: 36px;
        border:none;
        height: 100px;
        border-radius: 50px;
        background:$col-c;
        &.on{
          background:$col-blue;
        }
      }
    }
  }
}
</style>
