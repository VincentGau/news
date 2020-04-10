<template>
  <van-list
    v-model="isUploading"
    :finished="upFinished"
    finished-text="没有更多了"
    @load="onLoadList"
    offset="10"
    loading-text="正在刷新"
    :error.sync="bottomLoadFinish"
    error-text="请求失败，点击重新加载"
    :immediate-check="false"
  >
    <van-pull-refresh v-model="isDownLoading" @refresh="onDownRefresh">
      <div class="cm-news-list">
        <van-skeleton
          :row="1"
          :loading="loading"
          class="cm-news-skeleton"
        ></van-skeleton>
        <van-skeleton
          v-for="i in 5"
          :key="i"
          title
          avatar
          :row="3"
          :loading="loading"
        ></van-skeleton>
        <div class="swiper">
          <Banners :Swipers="Swipers" />
        </div>

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
import ListItem from '@/components/ListItem/ListItem.vue'
import Banners from '@/components/banner/banner.vue'
export default {
  components: {
    ListItem,
    Banners
  },
  data() {
    return {
      bottomLoadFinish: false, //触底加载是否出错
      isUploading: false, //是否处于上拉加载状态
      upFinished: false, //数据加载是否完毕
      isDownLoading: false, //是否处于下拉刷新状态
      loading: true, //骨架屏状态
      articles: [],
      Swipers: [],
      swiperloading: true
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
      _this.$axios
        .get('/getList')
        .then(response => {
          _this.articles = response.data.data
          _this.loading = false
        })
        .catch(error => console.log(error))
    },
    getBanner() {
      const _this = this
      _this.$axios
        .get('/getRecommendNewsInfo4Banner')
        .then(response => {
          _this.Swipers = response.data.data
          _this.loading = false
        })
        .catch(error => console.log(error))
    },
    // 触底加载
    onLoadList() {
      const _this = this
      setTimeout(() => {
        _this.$axios
          .get('/getList')
          .then(response => {
            _this.articles.push(response.data.data[0]) 
            _this.isUploading = false
            if (_this.articles.length >= 10) {
              _this.upFinished = true
            }
          })
          .catch(error => {
            console.log(error)
            _this.bottomLoadFinish = true
          })
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
<style lang="scss" type="text/css" scoped>
@import '../../assets/css/global.scss';
.swiper {
  padding-top: 0.2rem;
  padding-left: 0.32rem;
  padding-right: 0.32rem;
  height: 3.54rem;
}
</style>
