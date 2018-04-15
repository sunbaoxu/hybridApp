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
  background:rgba(0,0,0,0.6);
  padding: 0 30px;
  z-index:1010;
  .main{
    background: $col-f;
    flex:1;
    border-radius: 8px;
  }
}
</style>
