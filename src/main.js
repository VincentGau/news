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
import {
  Swipe,
  SwipeItem,
  List,
  PullRefresh,
  Toast,
  Loading,
  Search,
  Tag,
  Button,
  Popup
} from 'vant'
Vue.use(Button)
Vue.use(Tag)
Vue.use(Search)
Vue.use(Popup)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(List)
Vue.use(PullRefresh)
Vue.use(Loading)
Vue.use(Toast)
Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
