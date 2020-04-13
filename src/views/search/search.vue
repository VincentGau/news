<template>
  <div>
    <div class="cm-van-search" v-show="show">
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
      <div class="cm-hot-name">搜索推荐</div>
      <van-skeleton
        :row="1"
        :loading="historyloading"
        v-for="(item,index) in 6"
        :key="index"
        class="hot-van-skeleton"
      ></van-skeleton>
      <div class="cm-lables">
        <SearchHot :list="hotwordlist" @hot="hotval($event)" />
      </div>
    </div>

    <!-- 历史 -->
    <div class="cm-history" v-show="show">
      <div class="cm-history-name">历史搜索</div>
      <van-skeleton
        :row="1"
        :loading="historyloading"
        v-for="(item,index) in 6"
        :key="index"
        class="history-van-skeleton"
      ></van-skeleton>
      <SearchHistory :list="historydata" :showclear="showclear" @history="history($event)" />
      <div class="cm-clears" @click="showclears" v-show="showclear">
        <img src="../../assets/img/v-clears@2x.png" />
        <span class="cm-clears-val">清空搜索记录</span>
      </div>
      <div class="cm-clears" v-show="!showclear">
              <span class="cm-clears-val">暂无搜索历史记录</span>
            </div>
    </div>

    <!-- 结果 -->

    <div v-show="!show">
      <div class="cm-result">
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
        <van-sticky :offset-top="0">
          <div class="cm-result-header">
            <span>资讯</span>
          </div>
        </van-sticky>
        <van-list
          v-model="isUploading"
          :finished="upFinished"
          finished-text="没有更多了"
          @load="onLoadList"
          :offset="10"
          :error.sync="bottomLoadFinish"
          error-text="请求失败，点击重新加载"
          loading-text="正在刷新"
        >
          <div class="cm-news-list">
            <ListItem
              v-for="article in articles"
              :key="article.id"
              :article="article"
              class="cm-bottom-noborder"
            />
          </div>
        </van-list>
      </div>
    </div>
    <!-- 客服 -->
    <div class="cm-CustomService" v-show="!show">
      <CustomService />
    </div>
  </div>
</template>

<script>
import SearchHistory from '@/components/searchHistory/searchHistory.vue'
import SearchHot from '@/components/searchHot/searchHot.vue'
import CustomService from '@/components/customService/customService.vue'
import ListItem from '@/components/ListItem/ListItem.vue'
import {searchRequest} from '@/api/api.js'

export default {
  components: {
    ListItem,
    SearchHot,
    SearchHistory,
    CustomService
  },
  data() {
    return {
      bottomLoadFinish: false,//触底加载是否出错
      isUploading: false, //是否处于上拉加载状态
      upFinished: false, //数据加载是否完毕
      searchvalue: '',
      show: true,
      loading: false,
      historyloading: true,
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
    // 触底加载
    onLoadList() {
      const _this = this
      setTimeout(() => {
        _this.$axios
          .get('/getList')
          .then(response => {
            _this.articles = _this.articles.concat(response.data.data)
            _this.isUploading = false
            // 判断数据是否全部加载结束
            if( _this.articles.length >= 10) {
              _this.upFinished = true;
            }
          })
          .catch(error => {
            console.log(error)
            _this.bottomLoadFinish = true;
          })
      }, 1000)
    },
    // 清空历史
    showclears() {
      localStorage.setItem('searchHistory', '')
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
      this.$axios
        .get('/getSearchHotKeyWordList')
        .then(response => {
          this.hotwordlist = response.data.data
        })
        .catch(error => console.log(error))

      this.historydata = localStorage.getItem('searchHistory') ? JSON.parse(localStorage.getItem('searchHistory')) : []  
      console.log(this.historydata) 
      this.historyloading = false

      this.$axios
        .get('/getList')
        .then(response => {
          this.articles = response.data.data
        })
        .catch(error => console.log(error))
    },
    // 点击热词搜索
    hotval(item) {
      this.searchvalue = item.key
      this.updateSearchHistory(item.key)
      this.showclear = true
      this.show = false
    },
    // 点击历史搜索
    history(item) {
      this.searchvalue = item
      this.updateSearchHistory(item)
      this.showclear = true
      this.show = false
    },
    onSearch(val) {
      if (val == '') {
        this.show = true
      } else {
        console.log("Searching for : ", val)
        var d = '{  "abc": "11"} '
        searchRequest(d).then((res)=>{
          console.log(res)
        })
        this.updateSearchHistory(val)
        this.showclear = true
        this.show = false
      }
    },
    // 点击取消按钮后触发
    onCancel() {
      setTimeout(() => {
        this.show = true
      }, 100)
      this.$router.go(-1)
    },

    // 更新搜索历史记录
        updateSearchHistory(val){
          this.historydata = localStorage.getItem('searchHistory') ? JSON.parse(localStorage.getItem('searchHistory')) : []
          this.historydata.unshift(val)
          let hSet = new Set(this.historydata)
          this.historydata = [...hSet]
          console.log(this.historydata)
          localStorage.setItem('searchHistory', JSON.stringify(this.historydata))
        }
  }
}
</script>
<style lang="scss" type="text/css" scoped>
@import '../../assets/css/global.scss';
/* 结果 */
.cm-result {
  overflow: hidden;
  background: $contentBackgroundColor;
  height: 11rem;
  overflow-y: scroll;
  .cm-result-header {
    position: inherit;
    /* top: 0.9rem; */
    width: 100%;
    margin-left: 0.3rem;
    background: $contentBackgroundColor;
    height: 0.96rem;
    text-align: $textAlignLeft;
    padding-bottom: 0.05rem;
    border-bottom: 0.02rem solid $darkBackGroundColor;
  }
  .cm-result-header span {
    @include fontStyle(
      $hanziFontFamily,
      $secondTitColor,
      0.34rem,
      0.34rem,
      0,
      $textAlignLeft
    );
    position: relative;
    top: 0.2rem;
  }
}
.van-list_loading {
  height: 0;
}
/* 热 */
.cm-hot {
  background: $contentBackgroundColor;
  height: 2.7rem;
  .cm-hot-name {
    @include fontStyle(
      $headerFontFamily,
      $secondTitColor,
      0.34rem,
      0.34rem,
      0,
      $textAlignLeft
    );
    margin-left: 0.32rem;
    margin-bottom: 0.2rem;
    padding-top: 0.3rem;
  }
  .cm-lables {
    overflow: hidden;
    padding-top: 0.2rem;
    padding-left: 0.2rem;
    background: $contentBackgroundColor;
    height: 1.6rem;
  }
}

/* 历史 */
.cm-history {
  width: 100%;
  position: fixed;
  top: 3.55rem;
  bottom: 0;
  background: $contentBackgroundColor;
  margin-top: 0.4rem;
  .cm-history-name {
    @include fontStyle(
      $hanziFontFamily,
      $secondTitColor,
      0.34rem,
      0.5rem,
      0,
      $textAlignCenter
    );
    position: relative;
    left: -2.7rem;
    padding-top: 0.2rem;
  }
  .cm-clears {
    img {
      width: 0.3rem;
      margin-right: 0.1rem;
      margin-top: 0.05rem;
    }
    .cm-clears-val {
      @include fontStyle(
        $headerFontFamily,
        $textLowColor,
        0.26rem,
        0.25rem,
        0,
        $textAlignCenter
      );
      margin-top: 0.3rem;
    }
  }
}
</style>
