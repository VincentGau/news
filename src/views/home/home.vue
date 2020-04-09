<template>
    <div class="cm-page-container">

        <div class="cm-van-header">
            <van-nav-bar
                :title="active"
                left-text=""
                left-arrow
            >
                <van-icon
                    name="search"
                    slot="right"
                    @click="tosearch" 
                />
            </van-nav-bar>
        </div>

        <div class="cm-van-tabs tabbar-box-hidden">

            <van-tabs
                v-model="active"
                :swipeable="true"
                color="#00C3AC"
                title-active-color="#00C3AC"
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

        <div
            class="cm-page-swiper"
            ref="swiperBox"
            @touchmove="touchMove()"
            @touchstart="touchStart()"
        >
            <swiper
                ref="mySwiper"
                :options="swiperOption"
                class="myswiper"
            >
                <swiper-slide class="slide slidesRecommend">
                    <recommend></recommend>
                </swiper-slide>
                <swiper-slide class="slide slidesAllTime">
                    <allTime></allTime>
                </swiper-slide>
                <swiper-slide class="slide slidesOpinion">
                    <opinion></opinion>
                </swiper-slide>
                <swiper-slide class="slide slidesFund">
                    <fund></fund>
                </swiper-slide>
                <swiper-slide class="slide slidesInsurance">
                    <insurance></insurance>
                </swiper-slide>
                <swiper-slide class="slide slidesExchange">
                    <exchange></exchange>
                </swiper-slide>
                <swiper-slide class="slide slidesGold">
                    <gold></gold>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>
    import recommend from '../recommend/recommend'
    import allTime from '../7x24/7x24'
    import opinion from '../opinion/opinion'
    import fund from '../fund/fund'
    import insurance from '../insurance/insurance'
    import exchange from '../exchange/exchange'
    import gold from '../gold/gold'
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
          // 滑动距离监控
          startX: 0,
          startY: 0,
          // 页面切换
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
                    self.stickyAdjust()
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
              this.stickyAdjust()
            }
          })
        },

        // 获取tab数据
        getTabName() {
          this.$axios
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
          const topNum =
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            document.querySelector(a).scrollTop
          sessionStorage.setItem(b, topNum)
        },
        //监听长按起始位置
        touchStart() {
          // event.preventDefault() //阻止默认事件（长按的时候出现复制）

          this.startX = event.changedTouches[0].pageX
          this.startY = event.changedTouches[0].pageY
        },
        // 根据滑动方向对布局进行处理
        touchMove() {
          // event.preventDefault()
          var moveEndX = event.changedTouches[0].pageX
          var moveEndY = event.changedTouches[0].pageY
          var X = moveEndX - this.startX
          var Y = moveEndY - this.startY
          if (Math.abs(Y) > Math.abs(X) && Y > 0) {
            // top to bottom 下滑
            // alert('top to bottom')
            this.stickyAdjust()
          } else if (Math.abs(Y) > Math.abs(X) && Y < -50) {
            this.$el.querySelector('.cm-van-header').style.display = 'none'
          }
        },
        stickyAdjust() {
          this.$el.querySelector('.cm-van-header').style.display = 'block'
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
          if (
            from.name == 'articleDetails' ||
            from.name == 'search' ||
            from.name == 'shortMessageDetails'
          ) {
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

<style lang="scss" type="text/css" scoped>
@import '../../assets/css/global.scss';

.cm-page-container {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  .cm-van-header {
    display: block;
  }

  .cm-page-swiper {
    height: 100%;
    .myswiper {
      height: 100%;
      .slide {
        height: 93%;
        overflow-y: scroll;
      }
    }
  }

  .van-nav-bar__left .van-nav-bar__arrow,
  .van-nav-bar__right .van-icon-search {
    @include fontStyle(null, $textdarkColor, 0.4rem, 0.92rem, 0, null);
  }

  .van-nav-bar__title {
    @include fontStyle(
      $headerFontFamily,
      $textHighLightColor,
      0.36rem,
      0.92rem,
      0.12rem,
      $textAlignCenter
    );
  }
  .van-hairline--bottom::after {
    border-bottom-color: $contentBackgroundColor;
  }
}
</style>
