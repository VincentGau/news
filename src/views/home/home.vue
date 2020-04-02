<template>
  <div>
    <van-nav-bar
      :title="active"
      left-text=""
      left-arrow
      :fixed="true"
      :placeholder="true"
      :z-index="99"
    >
      <van-icon name="search" slot="right" @click="tosearch" />
    </van-nav-bar>
    <van-sticky offset-top="46">
      <van-tabs
        v-model="active"
        :swipeable="true"
        color="#00C3AC"
        title-active-color="#00C3AC"
        line-width="32"
        line-height="2"
        swipe-threshold="7"
        duration="0.3"
        @click="onClickTab"
      >
        <van-tab
          v-for="(item, index) in tabNameList"
          :key="index"
          :title="item.tabShowName"
          :name="item.tabShowName"
        >
        </van-tab>
      </van-tabs>
    </van-sticky>

    <swiper ref="mySwiper" :options="swiperOption" class="myswiper">
      <swiper-slide class="slides">
        <recommend></recommend>
      </swiper-slide>
      <swiper-slide class="slides">
        <allTime></allTime>
      </swiper-slide>
      <swiper-slide class="slides">
        <opinion></opinion>
      </swiper-slide>
      <swiper-slide class="slides">
        <fund></fund>
      </swiper-slide>
      <swiper-slide class="slides">
        <insurance></insurance>
      </swiper-slide>
      <swiper-slide class="slides">
        <exchange></exchange>
      </swiper-slide>
      <swiper-slide class="slides">
        <gold></gold>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import '../../assets/css/master.css'
import recommend from '../recommend/recommend'
import allTime from '../7x24/7x24'
import opinion from '../opinion/opinion'
import fund from '../fund/fund'
import insurance from '../insurance/insurance'
import exchange from '../exchange/exchange'
import gold from '../gold/gold'
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
    const self = this
    return {
      active: '',
      swiperOption: {
        autoplay: false,
        loop: false,
        initialSlide: 0,
        preventClickPropagation: true,
        simulateTouch: false,
        on: {
          // 页面滑动改变tabbar
          transitionEnd: function() {
            self.tabNameList.map((item, index) => {
              if (this.activeIndex + 1 == item.tabId) {
                self.active = item.tabShowName
              }
            })
          }
        }
      },
      tabNameList: []
    }
  },

  mounted() {
    this.getTabName()
  },

  methods: {
    // 点击tabbar切换页面状态
    onClickTab(name) {
      this.tabNameList.map((item, index) => {
        if (name == item.tabShowName) {
          this.$refs.mySwiper.$swiper.slideTo(item.tabId - 1, 500, true)
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
.myswiper .swiper-slide {
  height: 13rem !important;
  overflow-y: scroll;
}
.van-nav-bar {
  z-index: 10;
}
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
