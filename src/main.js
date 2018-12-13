// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import Qs from 'qs'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false


//注册
Vue.use(Element, { size: 'small', zIndex: 3000 })

//使用axios发送ajax
Vue.use(VueAxios,axios)
axios.defaults.withCredentials=true;
axios.defaults.baseURL="http://localhost:5050/" //配置所有服务器根目录
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
