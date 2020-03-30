<template>
  <van-list
    v-model="loading"
    :finished="finished"
    @load="onLoad"
    :offset="10"
    loading-text="正在刷新"
  >
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh(-1)">
      <div class="cm-news-list">
        <div class="swiper">
          <van-swipe
            :autoplay="2000"
            :loop="true"
            indicator-color="#000000"
            :show-indicators="true"
            class="van-swipe  recommend-swipe"
          >
            <van-swipe-item v-for="(image, index) in SwiperImg" :key="index">
              <img :src="image.url" class="imag" />
              <div class="introduce">
                <div class="swipe-img-tit">
                  投资黄金需要了解的几种目的
                </div>
                <div class="swipe-img-info">
                  <span class="swipe-img-name">新财富杂志</span>
                  <span class="swipe-img-read">10万阅读</span>
                  <span class="swipe-img-date">2020-02-15</span>
                </div>
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
        <van-skeleton title avatar :row="3" :loading="loading"></van-skeleton>
        <List-Item
          v-for="article in articles"
          :key="article.id"
          :article="article"
        />
      </div>
    </van-pull-refresh>
  </van-list>
</template>
<script>
import AppTab from '@/components/AppTab/'
import '../../assets/css/master.css'
import ListItem from '@/components/ListItem.vue'
import axios from 'axios'
export default {
  components: {
    AppTab,
    ListItem
  },
  data() {
    return {
      loading: false,
      finished: false,
      isLoading: false,
      articles: [],
      loading: true,
      SwiperImg: [
        { url: require('../../assets/img/news1-img.png') },
        { url: require('../../assets/img/news2-img.png') },
        { url: require('../../assets/img/news3-img.png') },
        { url: require('../../assets/img/news7-img.png') },
        { url: require('../../assets/img/news6-img.png') }
      ]
    }
  },
  mounted() {
    // 获取数据
    axios
      .get('/getList')
      .then(response => {
        this.articles = response.data.data
        // console.log(this.articles)
        this.loading = false
      })
      .catch(error => console.log(error))
  },
  created() {},
  methods: {
    onLoad(code) {
      // 上拉刷新
    },
    onRefresh() {
      // 下拉刷新
      this.finished = false
      this.isLoading = false
      this.$toast({
        message: '刷新成功',
        position: 'center'
      })
    }
  }
}
</script>
<style scoped>
.introduce {
  z-index: 99;
  position: absolute;
  width: 6.86rem;
  left: 0;
  bottom: 0.58rem;
  padding-bottom: 0.16rem;
  text-align: left;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.71) 100%
  );
  border-radius: 0.1rem;
}
.swipe-img-tit {
  font-family: 'PingFangSC-Medium';
  font-size: 0.32rem;
  color: #ffffff;
  letter-spacing: 0;
  text-align: justify;
  padding-left: 0.2rem;
  line-height: 0.32rem;
  padding-bottom: 0.16rem;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
}
.swipe-img-info span {
  line-height: 0.26rem;
  letter-spacing: 0;
  padding-left: 0.2rem;
  font-family: 'PingFangSC-Regular';
  overflow: hidden;
  color: #ffffff;
}

.swipe-img-info .swipe-img-name {
  width: 1.3rem;
  font-size: 0.26rem;
  float: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}

.swipe-img-info .swipe-img-read {
  width: 1.09rem;
  margin-left: 0.52rem;
  font-size: 0.26rem;
  float: left;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.swipe-img-info .swipe-img-date {
  margin-left: 0.2rem;
  width: 1.55rem;
  height: 0.26rem;
  font-size: 0.26rem;
  float: left;
}
.swiper {
  padding-top: 0.2rem;
  width: 100%;
  height: 3.54rem;
  margin-right: 0.2rem;
}
.van-swipe {
  margin-right: 0.2rem;
  width: 95%;
  height: 100%;
}
.imag {
  border-radius: 0.04rem;
  width: 100%;
  height: 2.96rem;
  pointer-events: none;
}
</style>
