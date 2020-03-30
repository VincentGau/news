<template>
  <div>
    <div class="cm-van-search">
      <van-search
        v-model="value"
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
        <SearchHot :list="list" @hot="hotval($event)" />
      </div>
    </div>

    <!-- 历史 -->
    <div class="cm-history" v-show="show">
      <div class="cm-history-name">历史搜索</div>
      <SearchHistory
        :list="list"
        :showclear="showclear"
        @history="history($event)"
      />
      <div class="cm-clears" @click="showclears" v-show="showclear">
        <img src="../../assets/img/v-clears@2x.png" />
        <span class="cm-clears-val">清空搜索记录</span>
      </div>
    </div>

    <!-- 结果 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh(-1)">
      <div class="cm-result" v-show="!show">
        <div class="cm-result-header">
          <span>资讯</span>
        </div>
        <div class="cm-news-list">
          <ListItem
            v-for="article in result"
            :key="article.id"
            :article="article"
            class="cm-bottom-noborder"
          />
        </div>
        <CustomService val="以上都不是，向客服提问吧" butval="提问" />
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import SearchHistory from '@/components/searchHistory.vue'
import SearchHot from '@/components/searchHot.vue'
import CustomService from '@/components/customService.vue'
import ListItem from '@/components/ListItem.vue'
import '../../assets/css/master.css'
import '../../mock/mock.js'
import Axios from 'axios'
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
      value: '',
      show: true,
      showclear: true,
      aaa: 'tag',
      list: [],
      result: []
    }
  },
  created() {
    this.inita()
  },
  methods: {
    onRefresh() {
      // 下拉刷新
      this.finished = false
      this.isLoading = false
      this.$toast({
        message: '刷新成功',
        position: 'center'
      })
    },
    showclears() {
      this.showclear = false
    },
    onblur() {
      if (this.value == '') {
        this.show = true
      } else {
        this.show = false
      }
    },
    onclear() {
      this.show = true
    },
    inita() {
      console.log('sssss')
      Axios.get('/getSearchHotKeyWordList').then(data => {
        this.list = data.data.data
        this.list.forEach(element => {
          var i = 0
          if (i < 3) {
            this.result.push(element)
            i++
          }
        })
        console.log(this.list)
      })
    },
    hotval(item) {
      this.value = item.val
      this.show = false
    },
    history(item) {
      console.log(11121212, item)
      this.value = item.val
      this.show = false
    },
    onSearch(val) {
      if (val == '') {
        this.show = true
      } else {
        this.show = false
      }
    },
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
}
.cm-result-header {
  margin-left: 0.3rem;
  background: #ffffff;
  height: 0.8rem;
  border-bottom: 1px solid #f1f1f1;
}
.cm-result-header span {
  position: relative;
  left: -3.1rem;
  font-family: 'PingFangSC-Regular';
  font-size: 17px;
  color: #222222;
  letter-spacing: 0;
  line-height: 0.31rem;
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
  font-size: 17px;
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
  font-size: 17px;
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
  font-size: 14px;
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
  font-size: 17px;
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
  font-size: 13px;
  color: #999999;
  letter-spacing: 0;
  line-height: 0.25rem;
  text-align: center;
  margin-top: 0.3rem;
}
</style>
