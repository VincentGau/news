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
      <div class="cm-van-refresh">—— 7X24快讯服务由“世界经济网”提供 ——</div>
      <van-steps direction="vertical" :active="-1" active-color="#000">
        <van-step class="cm-van-step">2020-01-16 09:40</van-step>
        <van-step v-for="(item, index) in articles" :key="index">
          <h3 class="cm-van-step-h3" @click="toDetails">{{ item.time }}</h3>
          <p class="cm-van-step-p" @click="toDetails">{{ item.value }}</p>
        </van-step>
      </van-steps>
    </van-list>
  </van-pull-refresh>
</template>

<script>
import axios from 'axios'
import '../../assets/css/master.css'
export default {
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
    toDetails() {
      this.$router.push('/shortMessageDetails')
      console.log('1', '')
    },
    // 获取数据
    getDataList() {
      const _this = this
      axios
        .get('/get7X24')
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
          .get('/get7X24')
          .then(response => {
            _this.articles.push(response.data.data[0])
            _this.articles.push(response.data.data[1])
            _this.isUploading = false
          })
          .catch(error => console.log(error))
      }, 2000)
    },
    // 下拉刷新
    onDownRefresh() {
      console.log(this.articles)
      const _this = this
      let time1 = setTimeout(() => {
        _this.$toast({
          message: '加载成功',
          position: 'center'
        })
        _this.isDownLoading = false
      }, 1000)
      window.clearTimeout(times1)
    }
  }
}
</script>
<style scoped>
.cm-van-refresh {
  font-family: PingFangSC-Regular;
  font-size: 0.26rem;
  color: #2a2a2a;
  letter-spacing: 0;
  text-align: center;
  line-height: 0.26rem;
  margin-top: 0.9rem;
  width: 100%;
  padding-top: 0.5rem;
  height: 0.6rem;
  background: #fff;
}
.cm-van-step {
  font-family: SFUIDisplay-Medium;
  font-size: 0.3rem;
  color: #333333;
  letter-spacing: 0;
  line-height: 0.3rem;
  font-size: 0.3rem;
  text-align: left;
  color: black;
  border: 0rem solid #fff;
}
.cm-van-step-h3 {
  font-family: SFUIDisplay-Regular;
  font-size: 0.3rem;
  color: #00b893;
  letter-spacing: 0;
  line-height: 0.3rem;
  margin-left: -5.5rem;
}
.cm-van-step-p {
  font-family: PingFangSC-Regular;
  font-size: 0.28rem;
  color: #333333;
  letter-spacing: 0;
  text-align: justify;
  line-height: 0.42rem;
  padding-left: 0.22rem;
  padding-right: 0.2rem;
  color: black;
}
</style>
