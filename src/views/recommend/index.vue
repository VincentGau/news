<template>
  <div class="cm-news-list">
    <div class="swiper">
      <van-swipe
        :autoplay="2000"
        :loop="true"
        indicator-color="#fff"
        :show-indicators="false"
        class="van-swipe"
      >
        <van-swipe-item v-for="(image, index) in SwiperImg" :key="index">
          <!-- <div style="width:.15rem;height:100%;position: absolute;background:#fff"></div> -->
          <img :src="image.url" class="imag" />
          <div class="introduce">
            <div style="fontSize:.4rem;color:#fff">
              投资黄金需要了解的几种目的
            </div>
            <div style="padding:.16rem 0">
              <span
                style="fontSize:.3rem;color:#fff;display:inlineblock;width:1.3rem;padding:0 .4rem 0 0"
                >新财富杂志</span
              >
              <span
                style="fontSize:.3rem;color:#fff;display:inlineblock;padding:0 .4rem 0 0"
                >10万阅读</span
              >
              <span style="fontSize:.3rem;color:#fff">2020-02-15</span>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="cm-news-item">
      <div class="cm-news-abstract">
        <div class="cm-news-tit">
          <span>海通证券基金业绩排行榜 | 南华基金权益类产品年度平均…</span>
        </div>
        <div class="cm-news-info">
          <span class="cm-news-name">新财富杂志</span>
          <span class="cm-news-read">10万阅读</span>
          <span class="cm-news-date">2020-02-22</span>
        </div>
      </div>
      <div class="cm-news-img">
        <img src="../../assets/img/news2-img.png" />
      </div>
    </div>
    <div class="cm-news-item">
      <div class="cm-news-abstract">
        <div class="cm-news-tit">
          <span>陈文龙：黄金震荡上涨今日行情如何操作原油价格最新情…</span>
        </div>
        <div class="cm-news-info">
          <span class="cm-news-name">人民日报</span>
          <span class="cm-news-read">30万阅读</span>
          <span class="cm-news-date">2020-02-22</span>
        </div>
      </div>
      <div class="cm-news-img">
        <img src="../../assets/img/news3-img.png" />
      </div>
    </div>
    <div class="cm-news-itemBigImg">
      <div class="cm-news-tit">
        <span>
          <span
            >最新国民投资理财情绪指数发布：股票房产保险为中国民众“三大爱”</span
          >
        </span>
      </div>
      <div class="cm-news-img">
        <img src="../../assets/img/news7-img.png" />
      </div>
      <div class="cm-news-info">
        <span class="cm-news-name">东方财富网</span>
        <span class="cm-news-read">10万阅读</span>
        <span class="cm-news-date">2020-02-22</span>
      </div>
    </div>
    <div class="cm-news-item">
      <div class="cm-news-abstract">
        <div class="cm-news-tit">
          <span>广发基金刘格菘：2020年如何把握科技投资机遇</span>
        </div>
        <div class="cm-news-info">
          <span class="cm-news-name">人民日报</span>
          <span class="cm-news-read">30万阅读</span>
          <span class="cm-news-date">2020-02-22</span>
        </div>
      </div>
      <div class="cm-news-img">
        <img src="../../assets/img/news6-img.png" />
      </div>
    </div>
    <div class="cm-news-item">
      <div class="cm-news-abstract">
        <div class="cm-news-tit">
          <span>海通证券基金业绩排行榜 | 南华基金权益类产品年度平均回…</span>
        </div>
        <div class="cm-news-info">
          <span class="cm-news-name">人民日报</span>
          <span class="cm-news-read">30万阅读</span>
          <span class="cm-news-date">2020-02-22</span>
        </div>
      </div>
      <div class="cm-news-img">
        <img src="../../assets/img/news7-img.png" />
      </div>
    </div>
  </div>
</template>
<script>
import AppTab from '@/components/AppTab/'
import '../../assets/css/master.css'
export default {
  components: {
    AppTab
  },
  data() {
    return {
      SwiperImg: [
        { url: require('../../assets/img/news1-img.png') },
        { url: require('../../assets/img/news2-img.png') },
        { url: require('../../assets/img/news3-img.png') },
        { url: require('../../assets/img/news7-img.png') },
        { url: require('../../assets/img/news6-img.png') }
      ]
    }
  },

  created() {},
  methods: {}
}
</script>
<style scoped>
.introduce {
  z-index: 999;
  position: absolute;
  left: 0;
  bottom: 0;
  padding-left: 0.2rem;
}
.swiper {
  padding-top: 0.2rem;
  width: 95%;
  height: 3.4rem;
  margin-right: 0.2rem;
}
.van-swipe {
  margin-right: 0.2rem;
  width: 100%;
  height: 100%;
}
.imag {
  border-radius: 0.2rem;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
