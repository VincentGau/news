import Vue from 'vue'
// 按需引用vant-ui库, 在.babelrc中有配置
// vant-ui 文档地址：https://youzan.github.io/vant/#/zh-CN/home
import { NavBar, Tabs, Tab, Icon  } from 'vant'

// 注册到全局
Vue.use(NavBar)
Vue.use(Tabs)
Vue.use(Tab)
Vue.use(Icon)
