<template>
  <div class="cm-page-container">
    <div class="cm-van-header">
      <van-nav-bar :title="active" left-text="" left-arrow>
        <van-icon name="search" slot="right" @click="tosearch" />
      </van-nav-bar>
    </div>

    <div class="cm-van-tabs">
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
    </div>
    <div class="cm-page-swiper" ref="swiperBox">
      <swiper ref="mySwiper" :options="swiperOption" class="myswiper">
        <swiper-slide class="slidesRecommend" ref="slides">
          <recommend></recommend>
        </swiper-slide>
        <swiper-slide class="slidesAllTime">
          <allTime></allTime>
        </swiper-slide>
        <swiper-slide class="slidesOpinion">
          <opinion></opinion>
        </swiper-slide>
        <swiper-slide class="slidesFund">
          <fund></fund>
        </swiper-slide>
        <swiper-slide class="slidesInsurance">
          <insurance></insurance>
        </swiper-slide>
        <swiper-slide class="slidesExchange">
          <exchange></exchange>
        </swiper-slide>
        <swiper-slide class="slidesGold">
          <gold></gold>
        </swiper-slide>
      </swiper>
    </div>
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
    this.$refs.swiperBox.addEventListener('scroll', this.setLeaveInfo, true)
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
    },
    //  每个页面的滚动条位置 记录与复原
    setScrollTop(a, b, c, d, e, f, g) {
      this.$nextTick(() => {
        this.$el.querySelector('.slidesRecommend').scrollTop = a
        this.$el.querySelector('.slidesAllTime').scrollTop = b
        this.$el.querySelector('.slidesOpinion').scrollTop = c
        this.$el.querySelector('.slidesFund').scrollTop = d
        this.$el.querySelector('.slidesInsurance').scrollTop = e
        this.$el.querySelector('.slidesExchange').scrollTop = f
        this.$el.querySelector('.slidesGold').scrollTop = g
      })
    },
    // 获取scrollTop存在本地
    setPageScroll(a, b) {
      b =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        document.querySelector(a).scrollTop
      sessionStorage.setItem(b, b)
    },
    setLeaveInfo() {
      this.setPageScroll('.slidesRecommend', 'slidesRecommend')
      this.setPageScroll('.slidesAllTime', 'slidesAllTime')
      this.setPageScroll('.slidesOpinion', 'slidesOpinion')
      this.setPageScroll('.slidesFund', 'slidesFund')
      this.setPageScroll('.slidesFund', 'slidesFund')
      this.setPageScroll('.slidesInsurance', 'slidesInsurance')
      this.setPageScroll('.slidesExchange', 'slidesExchange')
      this.setPageScroll('.slidesGold', 'slidesGold')
    }
  },
  beforeRouteEnter(to, from, next) {
    // 进入页面后进行路由判断
    next(vm => {
      if (from.name !== 'login') {
        const slidesRecommend = sessionStorage.getItem('slidesRecommend')
        const slidesAllTime = sessionStorage.getItem('slidesAllTime')
        const slidesOpinion = sessionStorage.getItem('slidesOpinion')
        const slidesFund = sessionStorage.getItem('slidesFund')
        const slidesInsurance = sessionStorage.getItem('slidesInsurance')
        const slidesExchange = sessionStorage.getItem('slidesExchange')
        const slidesGold = sessionStorage.getItem('slidesGold')
        vm.setScrollTop(
          slidesRecommend,
          slidesAllTime,
          slidesOpinion,
          slidesFund,
          slidesInsurance,
          slidesExchange,
          slidesGold
        )
      }
    })
  }
}
</script>

<style scoped>
.cm-page-container {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.myswiper {
  height: 13rem;
}
.myswiper .swiper-slide {
  height: 11.5rem !important;
  overflow-y: scroll;
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
