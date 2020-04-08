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
            <van-skeleton
                title
                avatar
                :row="3"
                :loading="loading"
            ></van-skeleton>
            <van-skeleton
                title
                avatar
                :row="1"
                :loading="loading"
            ></van-skeleton>
            <van-skeleton
                title
                avatar
                :row="10"
                :loading="loading"
            ></van-skeleton>
            <div class="cm-article-tit">
                {{ NewsDetail.title }}
            </div>

            <div class="cm-shareArticle-authorInfo">
                <span class="cm-article-source">{{ NewsDetail.source }}</span>
                <span class="cm-article-date">{{
          NewsDetail.publishTime ? NewsDetail.publishTime.substring(0, 10) : ''
        }}</span>
            </div>

            <div
                class="cm-article-content"
                v-html="NewsDetail.content"
            ></div>
            <div class="cm-article-read">
                <span><i>{{ NewsDetail.readNum }}</i>阅读</span>

            </div>
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
                <img
                    src="../../assets/img/icon-view-more@2x.png"
                    alt=""
                />
            </router-link>
        </div>
    </div>
</template>

<script>
    import Announcement from '../../components/announcement/announcement.vue'
    import praiseButton from '../../components/praiseButton/praiseButton.vue'
    import ListItem from '@/components/ListItem/ListItem.vue'
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
        this.$axios
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

<style lang="scss" type="text/css" scoped>
@import '../../assets/css/global.scss';
.van-nav-bar {
  height: 0.92rem;
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
  span {
    display: inline-block;
  }
  .cm-article-source {
    width: 70%;
    @include fontStyle(
      $hanziFontFamily,
      $textdarkColor,
      0.26rem,
      0.26rem,
      0,
      $textAlignLeft
    );
  }

  .cm-article-date {
    width: 30%;
    margin-right: 0rem;
    @include fontStyle(
      $numberFontFamily,
      $textLightColor,
      0.26rem,
      0.26rem,
      0,
      $textAlignRight
    );
  }
}
.cm-article-read {
  text-align: $textAlignLeft;

  span {
    @include fontStyle(
      $hanziFontFamily,
      $textArticleReadColor,
      0.28rem,
      0.28rem,
      0,
      $textAlignLeft
    );
    i {
      @include fontStyle(
        $numberFontFamily,
        $textLightColor,
        0.28rem,
        0.28rem,
        0,
        $textAlignLeft
      );
    }
  }
}
.cm-fond-more {
  height: 0.8rem;
  position: relative;
  span {
    display: inline-block;

    @include fontStyle(
      $hanziFontFamily,
      $textLightColor,
      0.28rem,
      0.8rem,
      0,
      $textAlignCenter
    );
  }
  img {
    height: 0.24rem;
    width: 0.24rem;
    margin-left: 0.1rem;
    position: absolute;
    top: 50%;
    margin-top: -0.12rem;
  }
}
</style>
