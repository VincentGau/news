<template>
  <div>
    <van-nav-bar
      left-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      :fixed="true"
    >
      <template #left>
        <van-icon name="cross" />
      </template>
      <template #right>
        <van-icon name="ellipsis" />
      </template>
    </van-nav-bar>
    <!-- 文章 -->
    <div class="cm-article-page">
      <van-skeleton title avatar :row="3" :loading="loading"></van-skeleton>
      <van-skeleton title avatar :row="1" :loading="loading"></van-skeleton>
      <van-skeleton title avatar :row="10" :loading="loading"></van-skeleton>
      <div class="cm-article-tit">
        {{ NewsDetail.title }}
      </div>

      <div class="cm-shareArticle-authorInfo">
        <span class="cm-article-source">{{ NewsDetail.source }}</span>
        <span class="cm-article-read">{{ NewsDetail.readNum }}阅读</span>
        <span class="cm-article-date">{{
          NewsDetail.publishTime ? NewsDetail.publishTime.substring(0, 10) : ''
        }}</span>
      </div>

      <div class="cm-article-content" v-html="NewsDetail.content"></div>

      <!-- 点赞按钮 -->
      <praiseButton
        :likeNum="NewsDetail.likeNum"
        :isLike="NewsDetail.isLike"
        @cancelPraise="cancelLike"
        @Praise="givePraise"
      ></praiseButton>
      <!-- 免责声明 -->
      <Announcement></Announcement>
    </div>
    <div class="cm-fond-more">
      <router-link to="">
        <span>查看更多精彩资讯</span>
        <img src="../../assets/img/icon-view-more@2x.png" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script>
import '../../assets/css/master.css'
import Announcement from '../../components/announcement'
import praiseButton from '../../components/praiseButton'
import ListItem from '@/components/ListItem.vue'
import axios from 'axios'

export default {
  components: {
    Announcement,
    praiseButton,
    ListItem
  },
  data() {
    return {
      articleId: '',
      loading: true,
      NewsDetail: {}
    }
  },
  created() {
    this.articleId = this.$route.query.articleId
    console.log('文章id', this.articleId)
  },
  mounted() {
    //获取文章详情数据,
    axios
      .get('/getNewsDetail')
      .then(response => {
        this.NewsDetail = response.data.data
        this.loading = false
      })
      .catch(error => console.log(error))
  },
  methods: {
    onClickLeft() {
      // 返回
      this.$router.go(-1)
    },
    onClickRight() {},
    cancelLike(value) {
      // 取消点赞
      if (!value) {
        this.NewsDetail.likeNum -= 1
        console.log('取消点赞了')
      }
    },
    givePraise(value) {
      // 点赞
      if (value) {
        this.NewsDetail.likeNum += 1
        console.log('点赞了')
      }
    }
  }
}
</script>
<style scoped>
.van-nav-bar {
  height: 0.8rem;
}
.van-nav-bar__right .van-icon,
.van-nav-bar__left .van-icon {
  color: #181818;
  font-size: 0.4rem;
}
.van-hairline--bottom::after {
  border: none;
}
.cm-shareArticle-authorInfo {
  padding: 0.3rem 0;
  text-align: left;
}
.cm-shareArticle-authorInfo span {
  font-size: 0.26rem;
  letter-spacing: 0;
  line-height: 0.26rem;
  display: inline-block;
}
.cm-shareArticle-authorInfo .cm-article-source {
  font-family: 'PingFangSC-Regular';
  color: #333333;
  width: 50%;
}
.cm-shareArticle-authorInfo .cm-article-read {
  font-family: 'PingFangSC-Regular';
  color: #2a2a2a;
  text-align: right;
  width: 20%;
}
.cm-shareArticle-authorInfo .cm-article-date {
  font-family: 'SFUIDisplay-Regular';
  color: #666666;
  text-align: right;
  width: 30%;
  margin-right: 0rem;
}
.cm-fond-more {
  height: 0.8rem;
  position: relative;
}

.cm-fond-more span {
  display: inline-block;
  font-family: 'PingFangSC-Regular';
  font-size: 0.28rem;
  color: #666666;
  letter-spacing: 0;
  line-height: 0.8rem;
}
.cm-fond-more img {
  height: 0.24rem;
  width: 0.24rem;
  margin-left: 0.1rem;
  position: absolute;
  top: 50%;
  margin-top: -0.12rem;
}
</style>
