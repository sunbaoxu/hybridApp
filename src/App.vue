<template>
  <div id="app">
    <router-view/>
    <alert-toast v-if="toastObj.async">{{toastObj.respMesg}}</alert-toast>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import alertToast from '@/common/alert/alertToast.vue';
export default {
  name: 'App',
  components : {
    alertToast
  },
  //获取订单数据
  computed: {...mapGetters(['toastObj'])}
}
</script>

<style lang="scss">
@import './lib/icon/iconfont.css';
body{
  background: $col-f0;
}

</style>
