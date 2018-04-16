<template>
  <div class="alert-back g-cen-cen-box" @touchmove.prevent>
    <main class="main">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: 'state',
  methods : {
    ...mapActions(['setToastObj'])
  },
  mounted () {
    setTimeout (() =>{
      this.setToastObj({async:false});
    },2000)
  }
}
</script>
<style lang="scss" scoped>
.alert-back{
  position: fixed;
  left:0;
  right:0;
  bottom:0;
  top:0;
  padding: 0 30px;
  .main{
    border-radius: 8px;
    max-width: 80%;
    background:rgba(0,0,0,0.8);
    font-size: 24px;
    color:$col-f;
    padding:10px 30px;
    line-height: 40px;
  }
}
</style>
