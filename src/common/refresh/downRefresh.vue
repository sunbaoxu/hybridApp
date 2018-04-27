<template>
  <div class="refresh-wrap g-cen-cen">
    <p>{{text}}</p>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
  name: 'state',
  data () {
    return {
      startY : 0,
      startX : 0,
      startScroll : 0,
      touching  : 0 ,
      text:'下拉刷新...',
      diff : 0
    }
  },
  methods : {
    ...mapActions(['setLodingAsync']),
    touchStart (e) {
      this.startY = e.targetTouches[0].pageY;
      this.startX = e.targetTouches[0].pageX;
    },
    touchMove (e) {
      this.diff = (e.targetTouches[0].pageY - this.startY)/2;
      if(this.diff >20 && this.diff <150 ){
        this.$emit('moveRefresh',200-this.diff);
        this.text = '下拉刷新...';
      } else if(this.diff >150 && this.diff <=200){
        this.text = '放开以刷新...';
        this.$emit('moveRefresh',200-this.diff);
      } 
       else if(this.diff <=20){
        if(this.diff <=0){
          this.diff = 0;
        }
        this.$emit('moveRefresh',200-this.diff);
      } 
      else if(this.diff >200){
        this.diff = 200;
      }
      else if(this.diff <=0){
        this.diff = 0;
      }
    },
    touchEnd (e){
      let num =0;
      if(this.diff >= 150){
        //隐藏loading
        this.setLodingAsync(true);
        this.$emit('endRefresh');
        this.text = '正在载入...';
      } else if(this.diff >0){
        num =200 - this.diff;
      } else{
        return 
      }

      let timer = setInterval (()=>{
        num = num+3;
        if(num >=200){
          num = 200;
          this.$emit('moveRefresh',num);
          clearInterval(timer);
          this.diff = 0;
        } else{
          this.$emit('moveRefresh',num);
        }
      },1);
    }
  },
  mounted () {
    window.addEventListener("touchstart",this.touchStart);
    window.addEventListener("touchmove",this.touchMove);
    window.addEventListener("touchend",this.touchEnd);
  }
}
</script>
<style lang="scss" scoped>
.refresh-wrap{
  background: transparent;
  height: 200px;
  align-items: flex-end;
  p{
    font-size: 30px;
    color:$col-9;
    line-height: 100px;
  }
}
</style>
