import Vue from 'vue'
// 按需引用vant-ui库, 在.babelrc中有配置
// vant-ui 文档地址：https://youzan.github.io/vant/#/zh-CN/home
import {
  NavBar,
  Tabs,
  Tab,
  Icon,
  Swipe,
  SwipeItem,
  List,
  PullRefresh,
  Toast,
  Loading,
  Search,
  Tag,
  Button,
  Popup,
  Skeleton,
  Sticky
} from 'vant'

// 注册到全局
Vue.use(NavBar)
Vue.use(Tabs)
Vue.use(Tab)
Vue.use(Icon)
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
Vue.use(Skeleton)
Vue.use(Sticky)
