<template>
  <div>
    <div class="cm-van-search">
      <van-search
        v-model="searchvalue"
        show-action
        placeholder="输入关键词查询"
        @search="onSearch"
        @cancel="onCancel"
        @clear="onclear"
        @blur="onblur"
      />
    </div>
    <!-- 热门 -->
    <div class="cm-hot" v-show="show">
      <div class="cm-hot-name">热门搜索</div>
      <div class="cm-lables">
        <SearchHot :list="hotwordlist" @hot="hotval($event)" />
      </div>
    </div>

    <!-- 历史 -->
    <div class="cm-history" v-show="show">
      <div class="cm-history-name">历史搜索</div>
      <SearchHistory
        :list="historydata"
        :showclear="showclear"
        @history="history($event)"
      />
      <div class="cm-clears" @click="showclears" v-show="showclear">
        <img src="../../assets/img/v-clears@2x.png" />
        <span class="cm-clears-val">清空搜索记录</span>
      </div>
    </div>

    <!-- 结果 -->
    <div v-show="!show">
      <div class="cm-result">
        <div class="cm-result-header">
          <span>资讯</span>
        </div>
        <div class="cm-news-list">
          <van-list
            v-model="loading"
            :finished="finished"
            loading-text="正在刷新"
            finished-text="没有更多了"
            @load="onLoad"
            :offset="10"
          >
            <ListItem
              v-for="article in articles"
              :key="article.id"
              :article="article"
              class="cm-bottom-noborder"
            />
          </van-list>
        </div>
      </div>
    </div>
    <!-- 客服 -->
    <div class="cm-CustomService" v-show="!show">
      <CustomService />
    </div>
  </div>
</template>

<script>
import SearchHistory from '@/components/searchHistory.vue'
import SearchHot from '@/components/searchHot.vue'
import CustomService from '@/components/customService.vue'
import ListItem from '@/components/ListItem.vue'
import axios from 'axios'
export default {
  components: {
    ListItem,
    SearchHot,
    SearchHistory,
    CustomService
  },
  data() {
    return {
      finished: false,
      isLoading: false,
      searchvalue: '',
      show: true,
      loading: false,
      showclear: true,
      // 数据
      historydata: [],
      articles: [],
      hotwordlist: [],
      result: []
    }
  },
  created() {
    this.inita()
  },
  methods: {
    onLoad() {
      // 上拉刷新
      setTimeout(() => {
        this.finished = true
      }, 1000)
    },
    // 清空历史
    showclears() {
      this.showclear = false
    },
    //输入框失去焦点时触发
    onblur() {
      if (this.searchvalue == '') {
        this.show = true
      } else {
        this.show = false
      }
    },
    // 点击清除按钮后触发
    onclear() {
      this.show = true
    },
    // 初始化
    inita() {
      axios
        .get('/getSearchHotKeyWordList')
        .then(response => {
          this.hotwordlist = response.data.data
        })
        .catch(error => console.log(error))
      axios
        .get('/gethistory')
        .then(response => {
          this.historydata = response.data.data
        })
        .catch(error => console.log(error))
      axios
        .get('/getList')
        .then(response => {
          this.articles = response.data.data
        })
        .catch(error => console.log(error))
    },
    // 点击热词搜索
    hotval(item) {
      this.searchvalue = item.val
      this.show = false
    },
    // 点击历史搜索
    history(item) {
      this.searchvalue = item.val
      this.show = false
    },
    onSearch(val) {
      if (val == '') {
        this.show = true
      } else {
        this.show = false
      }
    },
    // 点击取消按钮后触发
    onCancel() {
      this.$router.push('/recommend')
    }
  }
}
</script>
<style scoped>
/* 结果 */
.cm-result {
  overflow: hidden;
  background: #ffffff;
  height: 10rem;
  overflow-y: scroll;
}
.cm-result-header {
  position: sticky;
  top: 0;
  margin-left: 0.3rem;
  background: #ffffff;
  height: 0.8rem;
  padding-bottom: 0.05rem;
  border-bottom: 0.02rem solid #f1f1f1;
}
.cm-result-header span {
  position: relative;
  left: -3.1rem;
  top: -0.03rem;
  font-family: 'PingFangSC-Regular';
  font-size: 0.34rem;
  color: #222222;
  letter-spacing: 0;
  line-height: 0.34rem;
}
/* 订阅 */
.cm-subscribe-1 {
  width: 102%;
  height: 0.2rem;
  background: #f1f1f1;
  margin-left: -0.2rem;
}
.cm-subscribe {
  position: relative;
  top: 0.2rem;
}
.cm-subscribe-header {
  background: #ffffff;
  height: 0.98rem;
}
.cm-subscribe-header span {
  position: relative;
  left: -3.1rem;
  top: 0.2rem;
  font-family: 'PingFangSC-Regular';
  font-size: 0.34rem;
  color: #222222;
  letter-spacing: 0;
  line-height: 0.31rem;
}
.cm-subscribe-nofocus {
  position: relative;
  left: -0.5rem;
}
.cm-van-search {
  z-index: 999;
  background: #ffffff;
  position: sticky;
  top: 0;
}
/* 热 */
.cm-hot {
  background: #ffffff;
  height: 2.64rem;
}
.cm-hot .cm-hot-name {
  position: relative;
  left: -2.8rem;
  top: 0.2rem;
  font-family: 'PingFang-SC-Medium';
  font-size: 0.34rem;
  color: #222222;
  letter-spacing: 0;
  text-align: center;
  line-height: 0.34rem;
  margin-bottom: 0.2rem;
}
.cm-lables {
  overflow: hidden;
  padding-top: 0.3rem;
  padding-left: 0.2rem;
  background: #ffffff;
  height: 1.6rem;
}
.cm-lable {
  float: left;
  height: 0.4rem;
  background: #f1f1f1;
  font-family: 'PingFang-SC-Medium';
  font-size: 0.28rem;
  color: #333330;
  letter-spacing: 0;
  line-height: 0.29rem;
  margin-left: 0.2rem;
  margin-bottom: 0.2rem;
}
.cm-hot-img {
  width: 0.3rem;
  height: 0.3rem;
  margin-left: 0.15rem;
}
/* 历史 */
.cm-history {
  width: 100%;
  position: fixed;
  top: 3.55rem;
  bottom: 0;
  background: #ffffff;
  margin-top: 0.3rem;
}
.cm-history-name {
  position: relative;
  left: -2.7rem;
  font-family: 'PingFangSC-Regular';
  font-size: 0.34rem;
  color: #222222;
  letter-spacing: 0;
  /* line-height: 0.61rem; */
  padding-top: 0.2rem;
}
.cm-clears img {
  width: 0.3rem;
  margin-right: 0.1rem;
  margin-top: 0.05rem;
}
.cm-clears-val {
  font-family: 'PingFang-SC-Medium';
  font-size: 0.26rem;
  color: #999999;
  letter-spacing: 0;
  line-height: 0.25rem;
  text-align: center;
  margin-top: 0.3rem;
}
</style>
