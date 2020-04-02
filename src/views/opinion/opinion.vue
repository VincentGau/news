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
import ListItem from '@/components/ListItem/ListItem.vue'
import axios from 'axios'
import '../../assets/css/master.css'
export default {
  components: {
    ListItem
  },
  data() {
    return {
      isUploading: false, //是否处于上拉加载状态
      upFinished: false, //数据加载是否完毕
      isDownLoading: false, //是否处于下拉刷新状态
      articles: [], //请求数据
      loading: true //骨架屏状态
    }
  },
  mounted() {
    // 获取数据
    this.getDataList()
  },
  methods: {
    // 获取数据
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
<style scoped></style>
