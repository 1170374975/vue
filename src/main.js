import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,//当我们在vue的实例中使用了router时，它会向整个vue的this实例上添加一个$router属性
}).$mount('#app');
