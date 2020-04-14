<template>
    <div class="swiper">
        <van-swipe
            :autoplay="2000000"
            :loop="false"
            indicator-color="#000000"
            :show-indicators="true"
            class="van-swipe recommend-swipe"
        >
            <van-swipe-item
                v-for="(item, index) in Swipers"
                :key="index"
            >
                <router-link :to="{ path: '/articleDetails/' + item.docId}">

                    <img
                        :src="item.coverUrl"
                        class="imag"
                    />
                    <div class="introduce">
                        <div class="swipe-img-tit">{{ item.title }}</div>
                        <div class="swipe-img-info">
                            <span class="swipe-img-name">{{ item.source }}</span>
                            <span class="swipe-img-read"><i>{{ item.readNum }}</i>阅读</span>
                            <span class="swipe-img-date">{{  item.publishTime ? item.publishTime.substring(0, 10) : '' }}</span>
                        </div>
                    </div>
                </router-link>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
      props: {
        Swipers: {
          type: Array,
          required: true
        }
      }
    }
</script>

<style lang="scss" type="text/css" scoped>
@import '../../assets/css/global.scss';
.swiper {
  padding-top: 0.2rem;
  padding-left: 0.32rem;
  padding-right: 0.32rem;
  height: 3.54rem;
  .van-swipe {
    width: 110%;
    height: 100%;
    margin-left: -0.3rem;
    margin-top: -0.2rem;
    .imag {
      border-radius: 0.04rem;
      width: 100%;
      height: 2.96rem;
      pointer-events: none;
      display: block;
    }
    .introduce {
      z-index: 99;
      position: absolute;
      width: 6.86rem;
      left: 0;
      bottom: 0.58rem;
      padding-bottom: 0.16rem;
      text-align: left;
      background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.71) 100%
      );
      border-radius: 0.2rem;
      .swipe-img-tit {
        @include fontStyle(
          $headerFontFamily,
          $contentBackgroundColor,
          0.32rem,
          0.32rem,
          0,
          $textAlignJustify
        );
        margin-left: 0.2rem;
        text-shadow: 0 0.02rem 0.02rem rgba(0, 0, 0, 0.5);
      }
      .swipe-img-info {
        margin-top: 0.16rem;
        height: 0.3rem;
        padding-left: 0.2rem;
        span {
          display: inline-block;
          height: 0.3rem;
          overflow: hidden;
          text-overflow: clip;
          white-space: nowrap;
        }
        .swipe-img-name {
          @include fontStyle(
            $hanziFontFamily,
            $contentBackgroundColor,
            0.26rem,
            0.32rem,
            0,
            $textAlignLeft
          );
          max-width: 25%;
          float: left;
        }
        .swipe-img-read {
          @include fontStyle(
            $hanziFontFamily,
            $contentBackgroundColor,
            0.26rem,
            0.32rem,
            0,
            $textAlignRight
          );

          max-width: 25%;
          margin-left: 0.52rem;
          float: left;
          i {
            @include fontStyle(
              $numberFontFamily,
              $contentBackgroundColor,
              0.26rem,
              0.3rem,
              0,
              $textAlignLeft
            );
          }
        }
        .swipe-img-date {
          @include fontStyle(
            $hanziFontFamily,
            $contentBackgroundColor,
            0.26rem,
            0.32rem,
            0,
            $textAlignRight
          );
          margin-left: 0.2rem;
          width: 1.75rem;
          height: 0.26rem;
          float: left;
        }
      }
    }
  }
}
</style>
