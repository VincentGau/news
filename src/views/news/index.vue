<template>
  <van-list
    v-model="load"
    :finished="finished"
    @load="onLoad"
    :offset="10"
    loading-text="正在刷新"
  >
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh(-1)">
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
    </van-pull-refresh>
  </van-list>
</template>

<script>
import AppTab from '@/components/AppTab/'
import ListItem from '@/components/ListItem.vue'
import axios from 'axios'
import '../../assets/css/master.css'
export default {
  components: {
    AppTab,
    ListItem
  },
  data() {
    return {
      load: false,
      finished: false,
      isLoading: false,
      articles: [],
      loading: true
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
<style scoped></style>
