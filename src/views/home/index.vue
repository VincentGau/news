<template>
  <div>
    <van-nav-bar :title="active" left-text="" left-arrow :fixed="true">
      <van-icon name="search" slot="right" @click="tosearch" />
    </van-nav-bar>

    <van-sticky offset-top="46">
      <van-tabs
        v-model="active"
        :swipeable="true"
        color="#00C3AC"
        title-active-color="#00C3AC"
        line-width="32px"
        line-height="2px"
        swipe-threshold="7"
        duration="0.3"
        @change="onClickTab"
      >
        <van-tab
          v-for="(item, index) in tabNameList"
          :key="index"
          :title="item.tabShowName"
          :name="item.tabShowName"
        >
        </van-tab> </van-tabs
    ></van-sticky>

    <van-swipe
      class="my-swipe"
      :loop="false"
      :show-indicators="false"
      @change="onChangeSwiper"
      ref="swiper"
      :lazy-render="true"
    >
      <van-swipe-item
        ><keep-alive><recommend></recommend></keep-alive
      ></van-swipe-item>
      <van-swipe-item><allTime></allTime></van-swipe-item>
      <van-swipe-item><opinion></opinion></van-swipe-item>
      <van-swipe-item><fund></fund></van-swipe-item>
      <van-swipe-item><insurance></insurance></van-swipe-item>
      <van-swipe-item><exchange></exchange></van-swipe-item>
      <van-swipe-item><gold></gold></van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import '../../assets/css/master.css'
import recommend from '../recommend'
import allTime from '../7x24'
import opinion from '../opinion'
import fund from '../fund'
import insurance from '../insurance'
import exchange from '../exchange'
import gold from '../gold'
import axios from 'axios'
export default {
  name: 'home',
  components: {
    recommend,
    insurance,
    allTime,
    opinion,
    fund,
    insurance,
    exchange,
    gold
  },

  data() {
    return {
      swiperItem: 0,
      active: '',
      tabNameList: []
    }
  },
  watch: {},
  created() {},
  mounted() {
    this.getTabName()
  },

  methods: {
    // 滑动页面切换tabbar，header状态
    onChangeSwiper(index) {
      var id = index + 1
      // this.$refs.swiper.scrollTop = 0
      document.body.scrollTop = 0
      this.tabNameList.map((item, index) => {
        if (id == item.tabId) {
          this.active = item.tabShowName
        }
      })
    },
    // 点击tabbar切换页面状态
    onClickTab(name) {
      const $this = this
      this.tabNameList.map((item, index) => {
        if (name == item.tabShowName) {
          // console.log('tab', item.tabId)
          $this.$refs.swiper.swipeTo(item.tabId - 1)
        }
      })
    },

    // 获取tab数据
    getTabName() {
      axios
        .get('/getNewsTabList')
        .then(response => {
          this.tabNameList = response.data.data
          // 每次获取数据，说明重新进入页面，在这里进行路由和active的绑定
        })
        .catch(error => console.log(error))
    },
    // 搜索
    tosearch() {
      this.$router.push('/search')
    }
  }
}
</script>

<style scoped>
.van-nav-bar__left .van-nav-bar__arrow {
  font-size: 0.4rem;
  color: #333333;
}
.van-nav-bar__right .van-icon-search {
  font-size: 0.4rem;
  color: #666666;
}
.van-nav-bar__title {
  font-size: 0.36rem;
  font-family: 'PingFangSC-Medium';
  color: #000000;
  letter-spacing: 0.58px;
  text-align: center;
}
.van-hairline--bottom::after {
  border-bottom-color: white;
}
</style>
