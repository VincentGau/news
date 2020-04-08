<template>
    <div>
        <van-nav-bar
            title="短讯详情"
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
            <div class="cm-article-readdate cm-article-time">
                <span>
                    {{
                        NewsDetail.publishTime ? NewsDetail.publishTime.substring(0, 10) : ''
                      }}
                </span>
            </div>

            <div
                class="cm-article-content cm-article-val"
                v-html="NewsDetail.content"
            ></div>

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
    import '../../assets/css/main.scss'
    import Announcement from '../../components/announcement/announcement.vue'
    import praiseButton from '../../components/praiseButton/praiseButton.vue'
    import ListItem from '@/components/ListItem/ListItem.vue'

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
        this.articleId = this.$route.query.articleId
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
          this.$axios
            .get('/getNewsDetail')
            .then(response => {
              this.NewsDetail = response.data.data
              this.loading = false
            })
            .catch(error => console.log(error))
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
@import '../../assets/css/main.scss';
.cm-article-val {
  padding-top: 0.12rem;
}
.cm-article-time {
  margin-top: 0.21rem;
}
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
</style>
