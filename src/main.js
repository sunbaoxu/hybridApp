// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'

import axios from 'axios'
import store from '@/store/index';
import obj from '@/directives/directive';

//创建 自定义指令
for (let i in obj){
  Vue.directive(i,obj[i])
}


import 'element-ui/lib/theme-chalk/index.css';
//按需引入element UI
import Element  from 'element-ui';
Vue.prototype.$ELEMENT = { size: 'small' };
Vue.use(Element);

Vue.config.productionTip = false;





// 引入静态资源
require('@/assets/css/reset.scss');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store ,
  components: { App },
  template: '<App/>'
})
