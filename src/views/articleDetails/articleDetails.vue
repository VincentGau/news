<template>
    <div>
        <van-nav-bar
            title="文章详情"
            left-text=""
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            :fixed="true"
        >
            <img
                class="share-icon"
                src="../../assets/img/icon-share@2x.png"
                alt=""
                slot="right"
            />
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

            <div class="cm-article-authorInfo">
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

        <div class="cm-bottom-box">
            <div class="cm-info-box">
                <p>相关资讯</p>
                <List-Item
                    class="cm-bottom-noborder"
                    :article="relevantInformation"
                ></List-Item>
            </div>
            <div class="cm-recommend-info">
                <p>为您推荐</p>

                <Recommend-Product
                    v-for="product in RecommemdProductList"
                    :key="product.id"
                    :product="product"
                ></Recommend-Product>
            </div>
        </div>
    </div>
</template>

<script>
    import RecommendProduct from '../../components/recommendProduct/recommendProduct.vue'
    import Announcement from '../../components/announcement/announcement.vue'
    import praiseButton from '../../components/praiseButton/praiseButton.vue'
    import ListItem from '@/components/ListItem/ListItem.vue'
    import {getNewsDetail} from '@/api/api.js'

    export default {
      components: {
        RecommendProduct,
        Announcement,
        praiseButton,
        ListItem
      },
      data() {
        return {
          articleId: '', //文章id
          RecommemdProductList: [], //推荐产品数据
          NewsDetail: {}, //文章详细信息
          relevantInformation: {}, //相关资讯
          loading: true //骨架屏状态
        }
      },
      created() {
        this.articleId = this.$route.params.articleId
      },
      mounted() {
        this.getdata()
      },

      methods: {
        getdata() {
          // 获取推荐产品数据
          this.$axios
            .get('/getRecommemdProductList')
            .then(response => {
              this.RecommemdProductList = response.data.data
            })
            .catch(error => console.log(error))
          //获取文章详情数据,
          getNewsDetail().then(response => {
            this.NewsDetail = response.data
            console.log(this.NewsDetail)
            this.loading = false
          }).catch(error => console.log(error))
          //获取相关资讯的数据
          this.$axios
            .get('/getList')
            .then(response => {
              this.relevantInformation = response.data.data[0]
            })
            .catch(error => console.log(error))
        },
        onClickLeft() {
          // 返回
          this.$router.go(-1)
        },
        onClickRight() {
          // 分享
        },
        cancelLike(value) {
          // 取消点赞
          if (!value) {
            this.NewsDetail.likeNum -= 1
            // console.log('取消点赞了')
          }
        },
        givePraise(value) {
          // 点赞
          if (value) {
            this.NewsDetail.likeNum += 1
            // console.log('点赞了')
          }
        }
      }
    }
</script>

<style lang="scss" type="text/css" scoped>
@import '../../assets/css/global.scss';
.van-nav-bar__right {
  font-size: 0.6rem;
}
.share-icon {
  height: 0.4rem;
  width: 0.34rem;
}
.van-nav-bar__left .van-nav-bar__arrow {
  @include fontStyle(null, $textdarkColor, 0.4rem, 0.92rem, 0, null);
}
.van-nav-bar__title {
  @include fontStyle(
    $headerFontFamily,
    $textHighLightColor,
    0.36rem,
    0.92rem,
    0.116rem,
    $textAlignCenter
  );
}
.header .van-hairline--bottom::after {
  border-bottom-color: $contentBackgroundColor;
}
.cm-article-authorInfo {
  padding-top: 0.2rem;
  text-align: justify;
  span {
    display: inline-block;
  }
  .cm-article-source {
    width: 70%;
    @include fontStyle(
      $hanziFontFamily,
      $textdarkColor,
      0.28rem,
      0.28rem,
      0,
      $textAlignLeft
    );
  }

  .cm-article-date {
    width: 30%;
    @include fontStyle(
      $numberFontFamily,
      $textLightColor,
      0.28rem,
      0.28rem,
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
</style>
