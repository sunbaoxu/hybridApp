<template>
  <div id="app">
    <router-view/>
    <alert-toast v-if="toastObj.async">{{toastObj.respMesg}}</alert-toast>
    <alert-loading v-if="lodingAsync"></alert-loading>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import alertToast from '@/common/alert/alertToast.vue';
import alertLoading from '@/common/alert/alertLoading.vue';
export default {
  name: 'App',
  components : {
    alertToast,
    alertLoading
  },
  //获取订单数据
  computed: {...mapGetters(['toastObj','lodingAsync'])}
}
</script>

<style lang="scss">
@import './lib/icon/iconfont.css';
@import './lib/iosSelect/iosSelect.css';
body{
  background: $col-f0;
}

</style>
