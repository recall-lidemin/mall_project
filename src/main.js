import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'

// 导入字体图标
import './assets/fonts/iconfont.css'

// 导入挂在axios
import axios from 'axios'
// 配置请求得根路径
axios.defaults.baseURL = 'http://www.lideminrecall.com/api/'
// 请求拦截，为请求得headers添加Authorization属性
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
