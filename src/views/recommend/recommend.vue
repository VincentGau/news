<template>
  <van-pull-refresh v-model="isDownLoading" @refresh="onDownRefresh">
    <van-list
      v-model="isUploading"
      :finished="upFinished"
      @load="onLoadList"
      offset="10"
      loading-text="正在刷新"
      :immediate-check="false"
    >
      <div class="cm-news-list">
        <van-skeleton
          v-for="i in 5"
          :key="i"
          title
          avatar
          :row="3"
          :loading="loading"
        >
        </van-skeleton>
        <div class="swiper">
          <Banners :Swipers="Swipers" />
        </div>

        <List-Item
          v-for="article in articles"
          :key="article.id"
          :article="article"
        />
      </div>
    </van-list>
  </van-pull-refresh>
</template>
<script>
import '../../assets/css/master.css'
import ListItem from '@/components/ListItem/ListItem.vue'
import Banners from '@/components/banner/banner.vue'
import axios from 'axios'
export default {
  components: {
    ListItem,
    Banners
  },
  data() {
    return {
      isUploading: false, //是否处于上拉加载状态
      upFinished: false, //数据加载是否完毕
      isDownLoading: false, //是否处于下拉刷新状态
      loading: true, //骨架屏状态
      articles: [],
      Swipers: []
    }
  },
  mounted() {
    this.getDataList()
    this.getBanner()
  },
  methods: {
    // 获取新闻列表数据
    getDataList() {
      const _this = this
      axios
        .get('/getList')
        .then(response => {
          _this.articles = response.data.data
          _this.loading = false
        })
        .catch(error => console.log(error))
    },
    getBanner() {
      const _this = this
      axios
        .get('/getRecommendNewsInfo4Banner')
        .then(response => {
          _this.Swipers = response.data.data
          _this.loading = false
        })
        .catch(error => console.log(error))
    },
    // 上拉刷新
    onLoadList() {
      const _this = this
      setTimeout(() => {
        axios
          .get('/getList')
          .then(response => {
            _this.articles.push(response.data.data[0])
            _this.isUploading = false
          })
          .catch(error => console.log(error))
      }, 2000)
    },
    // 下拉刷新
    onDownRefresh() {
      const _this = this
      setTimeout(() => {
        _this.$toast({
          message: '加载成功',
          position: 'center'
        })
        _this.isDownLoading = false
      }, 1000)
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
  padding-left: 0.32rem;
  padding-right: 0.32rem;
  height: 3.54rem;
}
.van-swipe {
  width: 100%;
  height: 100%;
}
.imag {
  border-radius: 0.04rem;
  width: 100%;
  height: 2.96rem;
  pointer-events: none;
}
</style>
