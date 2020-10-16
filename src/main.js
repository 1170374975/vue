import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import axios from './http';

Vue.config.productionTip = false
// 把axios挂载到vue实例原型链上(因为在这里引入，没法在组件上用，在每个组件都引入axios太麻烦)
Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
  router,

}).$mount('#app');
