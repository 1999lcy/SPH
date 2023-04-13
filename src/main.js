import Vue from 'vue'
import App from './App.vue'

import router from '@/router'
import store from './store';

//注册全局组件
import TypeNav from '@/components/TypeNav';
Vue.component('TypeNav', TypeNav);

Vue.config.productionTip = false

//在入口文件中引入一次模块，让它执行一次，就跟引入样式一样，引入mock
import '@/mock/mockServe';

import 'swiper/css/swiper.css';

new Vue({
  render: h => h(App),

  router,
  store
}).$mount('#app')
