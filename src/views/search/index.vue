<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        @clear="onclear"
        @blur="onblur"
      />
    </form>
    <!-- 热门 -->
    <div class="hot" v-show="show">
      <div class="hot_name">热门搜索</div>
      <van-tag round class="lable" @click="hotval()" :ref="aaa">
        大家都在讨论
        <img src="../../assets/img/hot.png" class="hot_img" />
      </van-tag>
      <van-tag round class="lable">
        股票基金
        <img src="../../assets/img/xin.png" class="hot_img" />
      </van-tag>
      <van-tag round class="lable">
        社会
        <img src="../../assets/img/hot.png" class="hot_img" />
      </van-tag>
      <van-tag round class="lable">
        贵金属
        <img src="../../assets/img/xin.png" class="hot_img" />
      </van-tag>
      <van-tag round class="lable">
        外汇
        <img src="../../assets/img/hot.png" class="hot_img" />
      </van-tag>
      <van-tag round class="lable">
        要闻
        <img src="../../assets/img/xin.png" class="hot_img" />
      </van-tag>
    </div>
    <!-- 历史 -->
    <div class="history" v-show="show">
      <div class="history_name">历史搜索</div>
      <div>
        <div class="history_val">
          <img src="../../assets/img/v-search@2x.png" class="history_img" />
          <span>大家都在讨论</span>
        </div>
        <div class="history_val">
          <img src="../../assets/img/v-search@2x.png" class="history_img" />
          <span>要闻</span>
        </div>
        <div class="history_val">
          <img src="../../assets/img/v-search@2x.png" class="history_img" />
          <span>外汇</span>
        </div>
        <div class="history_val">
          <img src="../../assets/img/v-search@2x.png" class="history_img" />
          <span>股票基金</span>
        </div>
      </div>
      <div class="clears">
        <img src="../../assets/img/v-clears@2x.png" alt />
        <span class="clears_val">清空搜索记录</span>
      </div>
    </div>
    <!-- 结果 -->
    <div class="result" v-show="!show">
      <div class="result_header">
        <span>资讯</span>
      </div>
      <div class="cm-news-item cm-bottom-noborder">
        <div class="cm-news-abstract">
          <div class="cm-news-tit">
            <span>广发基金刘格菘：2020年如何把握科技投资机遇</span>
          </div>
          <div class="cm-news-info">
            <span class="cm-news-name">人民日报</span>
            <span class="cm-news-read">30万阅读</span>
            <span class="cm-news-date">2020-02-22</span>
          </div>
        </div>
        <div class="cm-news-img">
          <img src="../../assets/img/news6-img.png" />
        </div>
      </div>
      <div class="cm-news-item cm-bottom-noborder">
        <div class="cm-news-abstract">
          <div class="cm-news-tit">
            <span>海通证券基金业绩排行榜 | 南华基金权益类产品年度平均回…</span>
          </div>
          <div class="cm-news-info">
            <span class="cm-news-name">人民日报</span>
            <span class="cm-news-read">30万阅读</span>
            <span class="cm-news-date">2020-02-22</span>
          </div>
        </div>
        <div class="cm-news-img">
          <img src="../../assets/img/news7-img.png" />
        </div>
      </div>
      <!-- 订阅 -->
      <div class="subscribe">
        <div class="subscribe_1"></div>
        <div class="subscribe_header">
          <span>订阅号</span>
        </div>
        <div class="cm-article-authorInfo subscribe_authorInfo">
          <div class="cm-author-img subscribe_author_img">
            <img src="../../assets/img/hot.png" />
            <img src="../../assets/img/v-icon@3x.png" />
          </div>
          <div class="cm-author-nameInfo">
            <p class="subscribe_val">博时基金</p>
            <p>1239万粉丝·人民日报官方账号</p>
          </div>
          <div class="cm-author-nofocus subscribe_nofocus">关注</div>
        </div>
        <div class="cm-article-authorInfo subscribe_authorInfo">
          <div class="cm-author-img subscribe_author_img">
            <img src="../../assets/img/hot.png" />
            <img src="../../assets/img/v-icon@3x.png" />
          </div>
          <div class="cm-author-nameInfo">
            <p class="subscribe_val">华安基金</p>
            <p>299万粉丝·人民日报官方账号</p>
          </div>
          <div class="cm-author-nofocus subscribe_nofocus">关注</div>
        </div>
      </div>
      <div class="aa">
        <div class="subscribe_1"></div>
        <div class="last">
          <span>以上都不是，向客服提问吧</span>
          <div class="cm-author-nofocus last_nofocus ">提问</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../assets/css/master.css'
// import './mock.js'
// import Axios from 'axios'
export default {
  data() {
    return {
      value: '',
      show: true,
      aaa: 'tag'
    }
  },
  methods: {
    onblur() {
      console.log(this.value, 222)
      if (this.value == '') {
        this.show = true
      } else {
        this.show = false
      }
    },
    onclear() {
      this.show = true
    },
    // inita(){
    //   console.log("sssss")
    //   Axios.get("http://test.com")
    //   .then((data) => {
    //     console.log(data)
    //   })
    // },
    hotval() {
      var tag = this.$refs.tag.innerHTML
      this.value = tag.split('<img')[0]
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
/* 热门 */
.hot {
  background: #ffffff;
}
.hot .hot_name {
  position: relative;
  left: -2.8rem;
  font-family: 'PingFang-SC-Medium';
  font-size: 17px;
  color: #222222;
  letter-spacing: 0;
  text-align: center;
  line-height: 0.3rem;
  margin-bottom: 0.2rem;
}
.lable {
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
.hot_img {
  width: 0.3rem;
  height: 0.3rem;
  margin-left: 0.15rem;
}
/* 历史 */
.history {
  width: 100%;
  position: fixed;
  top: 2.8rem;
  bottom: 0;
  background: #ffffff;
  margin-top: 0.3rem;
}
.history_name {
  position: relative;
  left: -2.8rem;
  font-family: 'PingFangSC-Regular';
  font-size: 17px;
  color: #222222;
  letter-spacing: 0;
  line-height: 0.61rem;
}
.history_val {
  background: #ffffff;
  height: 0.9rem;
  border-bottom: 1px solid #dbdbdb;
}
.history_val span {
  float: left;
  margin-left: 0.15rem;
  margin-top: 0.3rem;
  font-family: 'PingFang-SC-Medium';
  font-size: 15px;
  color: #666666;
  letter-spacing: 0;
  line-height: 0.29rem;
}
.history_img {
  float: left;
  margin-left: 0.2rem;
  margin-top: 0.28rem;
  top: 0.1rem;
  left: -2.5rem;
  width: 0.4rem;
}
.clears img {
  width: 0.3rem;
  margin-right: 0.1rem;
  margin-top: 0.05rem;
}
.clears_val {
  font-family: 'PingFang-SC-Medium';
  font-size: 13px;
  color: #999999;
  letter-spacing: 0;
  line-height: 0.25rem;
  text-align: center;
  margin-top: 0.3rem;
}
/* 结果 */
.result {
  padding-left: 0.2rem;
  background: #ffffff;
}
.result_header {
  background: #ffffff;
  height: 0.8rem;
  border-bottom: 1px solid #f1f1f1;
}
.result_header span {
  position: relative;
  left: -3.1rem;
  font-family: 'PingFangSC-Regular';
  font-size: 17px;
  color: #222222;
  letter-spacing: 0;
  line-height: 0.31rem;
}
/* 订阅 */
.subscribe_1 {
  width: 102%;
  height: 0.2rem;
  background: #f1f1f1;
  margin-left: -0.2rem;
}
.subscribe {
  position: relative;
  top: 0.2rem;
}
.subscribe_header {
  background: #ffffff;
  height: 0.98rem;
}
.subscribe_header span {
  position: relative;
  left: -3.1rem;
  top: 0.2rem;
  font-family: 'PingFangSC-Regular';
  font-size: 17px;
  color: #222222;
  letter-spacing: 0;
  line-height: 0.31rem;
}
/* .subscribe_val {
  position: relative;
  left: -1rem;
} */
.subscribe_nofocus {
  position: relative;
  left: -0.5rem;
}
.aa {
  width: 102%;
  height: 100%;
  background: #f1f1f1;
  margin-left: -0.2rem;
  /* position: fixed; */
}
.last {
  width: 6.5rem;
  margin-left: 0.5rem;
  background: #ffffff;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.06);
  border-radius: 0.15rem;
}
.last span {
  font-family: 'PingFangSC-Regular';
  font-size: 15px;
  color: #333333;
  letter-spacing: 0;
  line-height: 15px;
  position: relative;
  left: -0.5rem;
  top: 0.22rem;
}
.last_nofocus {
  border-radius: 0.2rem;
  position: relative;
  left: -0.5rem;
  bottom: 0.15rem;
}
.subscribe_authorInfo {
  border-bottom: 1px solid #f1f1f1;
}
.subscribe_author_img {
  margin-left: 0.1rem;
}
</style>
