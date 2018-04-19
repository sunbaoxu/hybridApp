<template>
  <div class="code-wrap">
    <p>
      <input 
        type="text" 
        placeholder="请输入商家推荐码" 
        v-model="text" 
        v-on:input ="changFn"
        maxlength="11">
        <i class="iconfont icon-guanbi guan" @click="text =''" :class="{'on':text!=''}"></i>
    </p>
    <p>
      <button :class="{on:btnAsync}" @click="queryBusinessInfoAndProgram" :disabled="!btnAsync">下一步</button>
    </p>
  </div>
</template>

<script>
import api  from '@/api/api';
import {mapActions} from 'vuex';
import globalFn from '@/assets/javascripts/globalFn';
export default {
  name: 'shangCode',
  data () {
    return {
      text:'',
      btnAsync :false
    }
  },
  methods : {
    ...mapActions(['setToastObj','setLodingAsync']),
    //用户输入内容
    changFn () {
      if(this.text.length >=6 && this.text.length <=11){
        this.btnAsync = true;
      } else{
        this.btnAsync = false;
      }
    },
    //根据机构推荐码查询商户信息及商品各个方案
    queryBusinessInfoAndProgram () {
      //显示loading
      this.setLodingAsync(true);

      let obj =  globalFn.concatObj({QRcode :this.text});

      api.queryBusinessInfoAndProgram(obj).then((res) =>{
        if(res.respCode =='000'){
          this.$router.push({path:'/business/shangList',query:{recoCode:this.text}});
        } else{
          this.setLodingAsync(false);
          this.setToastObj({async:true,respMesg:res.respMesg});
        }
      },(error)=>{
        console.log(error,'dfs')
      });
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
      position: relative;
      input{
        padding-left:30px;
        width:100%;
        box-sizing: border-box;
        height: 100%;
        border:none;
        background: $col-f;
        font-size: 30px;
      }
      .guan{
        position: absolute;
        font-size: 40px;
        color:$col-6;
        right:20px;
        top:30px;
        display: none;
        &.on{
          display: block;
        }
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
