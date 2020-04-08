<template>
    <div class="cm-article-praise">
        <img
            v-if="ispraise"
            src="../../assets/img/praise-icon@2x.png"
            @click="cancelPraise"
        />

        <img
            v-else
            src="../../assets/img/nopraise-icon@2x.png"
            @click="givePraise"
        />

        <span>{{ likeNum }}</span>
    </div>
</template>

<script>
    export default {
      props: {
        likeNum: Number,
        isLike: Boolean
      },
      data() {
        return {
          ispraise: this.isLike
        }
      },

      methods: {
        cancelPraise() {
          // 取消点赞
          this.ispraise = false
          this.$emit('cancelPraise', this.ispraise)
        },
        givePraise() {
          // 点赞
          this.ispraise = true
          this.$emit('Praise', this.ispraise)
        }
      }
    }
</script>

<style lang="scss" type="text/css" scoped>
@import '../../assets/css/global.scss';
.cm-article-praise {
  margin: 0.32rem auto;
  height: 0.98rem;
  width: 0.96rem;
  position: relative;
  background: $contentBackgroundColor;
  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    box-shadow: $darkBackGroundColor 0px 0px 10px;
  }
  span {
    position: absolute;
    width: 0.96rem;
    left: 0;
    bottom: 0.12rem;
    @include fontStyle(
      $numberFontFamily,
      $textLowColor,
      0.2rem,
      0.2rem,
      0,
      $textAlignCenter
    );
  }
}
</style>
