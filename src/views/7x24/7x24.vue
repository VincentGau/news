<template>
  <van-pull-refresh v-model="isDownLoading" @refresh="onDownRefresh">
    <van-list
      v-model="isUploading"
      :finished="upFinished"
      finished-text="没有更多了"
      @load="onLoadList"
      offset="10"
      :error.sync="bottomLoadFinish"
      error-text="请求失败，点击重新加载"
      loading-text="正在刷新"
      :immediate-check="false"
    >
      <div class="cm-van-refresh">—— 7X24快讯服务由“世界经济网”提供 ——</div>
      <van-steps direction="vertical" :active="-1" active-color="#000">
        <van-step class="cm-van-step-val">2020-01-16 09:40</van-step>
        <van-step v-for="(item, index) in articles" :key="index">
          <h3 class="cm-van-step-h3" @click="toDetails(item)">
            {{ item.time }}
          </h3>
          <p class="cm-van-step-p" @click="toDetails(item)">{{ item.value }}</p>
        </van-step>
      </van-steps>
    </van-list>
  </van-pull-refresh>
</template>

<script>
export default {
  data() {
    return {
      bottomLoadFinish: false, //触底加载是否出错
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
    toDetails(item) {      
      this.$router.push({
        path: '/shortMessageDetails/' + item.docId,
      })
    },
    // 获取数据
    getDataList() {
       
      this.$axios
        .get('/get7X24')
        .then(response => {
          this.articles = response.data.data
          this.loading = false
        })
        .catch(error => console.log(error))
    },
    // 触底加载
    onLoadList() {
      const _this = this
      setTimeout(() => {
        _this.$axios
          .get('/get7X24')
          .then(response => {
            _this.articles.push(response.data.data[0]) 
            _this.isUploading = false
            // 判断数据是否全部加载结束
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
      // console.log(this.articles)
      const _this = this
      let time1 = setTimeout(() => {
        _this.$toast({
          message: '加载成功',
          position: 'center'
        })
        _this.isDownLoading = false
      }, 1000)
      // window.clearTimeout(time1)
    }
  }
}
</script>
<style lang="scss" type="text/css" scoped>
@import '../../assets/css/global.scss';
.cm-van-refresh {
  @include fontStyle(
    $hanziFontFamily,
    $textArticleReadColor,
    0.26rem,
    0.26rem,
    0,
    $textAlignCenter
  );
  width: 100%;
  padding-top: 0.32rem;
  padding-bottom: 0.33rem;
  height: 0.26rem;
  background: $contentBackgroundColor;
}
.cm-van-step-val {
  @include fontStyle(
    $headerFontFamily,
    $textdarkColor,
    0.3rem,
    0.3rem,
    0,
    $textAlignLeft
  );
  border: 0rem solid $contentBackgroundColor;
}
.cm-van-step-h3 {
  @include fontStyle(
    $numberFontFamily,
    $tabActiveColor,
    0.3rem,
    0.3rem,
    0,
    $textAlignLeft
  );
  padding-bottom: 0.2rem;
}
.cm-van-step-p {
  @include fontStyle(
    $hanziFontFamily,
    $textdarkColor,
    0.28rem,
    0.42rem,
    0,
    $textAlignJustify
  );
}
</style>
