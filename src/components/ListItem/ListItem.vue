<template>
    <div class="cm-news-item">
        <router-link :to="{ path: '/articleDetails', query: { articleId: article.docId } }">
            <div class="cm-news-abstract">
                <div class="cm-news-tit">
                    <span>{{ article.title }}</span>
                </div>
                <div class="cm-news-info">
                    <span class="cm-news-name">{{ article.source }}</span>
                    <span class="cm-news-read"><i>{{ article.readNum }}</i>阅读</span>
                    <span class="cm-news-date">{{
            article.publishTime ? article.publishTime.substring(0, 10) : ''
          }}</span>
                </div>
            </div>
            <div class="cm-news-img">
                <img :src="article.coverUrl" />
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
      props: {
        article: {
          type: Object,
          required: true
        }
      }
    }
</script>
<style lang="scss" type="text/css" scoped>
@import '../../assets/css/global.scss';
.cm-news-item {
  border-bottom: 1px solid $borderColor;
  padding-bottom: 0.34rem;
  padding-right: 0.32rem;
  font-size: 0rem;
  margin-left: 0.32rem;

  .cm-news-abstract {
    vertical-align: middle;
    display: inline-block;
    width: 4.3rem;
    margin-top: 0.28rem;

    .cm-news-tit {
      height: 0.96rem;
      width: 4.3rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      @include fontStyle(
        $hanziFontFamily,
        $textdarkColor,
        0.32rem,
        0.48rem,
        0,
        $textAlignJustify
      );
    }

    .cm-news-info {
      margin-top: 0.36rem;
      height: 0.3rem;

      span {
        display: inline-block;
        height: 0.3rem;
      }

      .cm-news-name {
        width: 1.3rem;
        @include fontStyle(
          $hanziFontFamily,
          $textdarkColor,
          0.26rem,
          0.3rem,
          0,
          $textAlignLeft
        );
      }

      .cm-news-read {
        width: 1.29rem;
        margin-left: 0.1rem;

        @include fontStyle(
          $hanziFontFamily,
          $textLowColor,
          0.26rem,
          0.3rem,
          0,
          $textAlignCenter
        );
        i {
          @include fontStyle(
            $numberFontFamily,
            $textLowColor,
            0.26rem,
            0.3rem,
            0,
            $textAlignLeft
          );
        }
      }

      .cm-news-date {
        width: 1.48rem;
        margin-left: 0.1rem;

        @include fontStyle(
          $numberFontFamily,
          $textLowColor,
          0.26rem,
          0.3rem,
          0,
          $textAlignRight
        );
      }
    }
  }

  .cm-news-img {
    display: inline-block;
    vertical-align: middle;
    margin-left: 0.32rem;
    margin-top: 0.38rem;
    width: 2.24rem;
    height: 1.44rem;
    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
