import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './mock/mock.js'

//引入vant-ui
import './plugins/vant-ui'
import 'vant/lib/index.css'
// 引入rem
import './plugins/rem.js'
// 引入初始化样式
import './assets/css/reset.scss'
// 引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
