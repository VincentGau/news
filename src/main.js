import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './mock/mock.js'

//引入vant-ui
import './plugins/vant-ui'
import './plugins/rem.js'
import './assets/css/reset.css'
import 'vant/lib/index.css'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
