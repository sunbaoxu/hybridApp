<template>
  <div class="alert-back g-cen-cen-box" @touchmove.prevent @click.self="closeAlertFn">
    <main class="main">
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: 'state',
  data () {
    return {
      
    }
  },
  methods : {
    closeAlertFn () {
      this.$emit('closeAlertFn')
    }
      
  },
  mounted () {
    
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
    font-size: 34px;
    color:$col-f;
    padding:10px 30px;
    line-height: 40px;
  }
}
</style>
