<template>
  <div class="loading-back g-cen-cen-box">
    <img src="/static/images/loading.gif" >
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
.loading-back{
  position: fixed;
  left:0;
  right:0;
  bottom:0;
  top:0;
  background:transparent;
  padding: 0 30px;
  z-index:1010;
  img{
    display: block;
  }
}
</style>
