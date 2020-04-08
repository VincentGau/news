<template>
    <div class="cm-last">
        <div class="cm-subscribe-1"></div>
        <div class="cm-last-val">
            <span>以上都不是，向客服提问吧</span>
            <div
                class="cm-author-nofocus cm-last-nofocus"
                @click="$emit('problem')"
            >提问</div>
        </div>
    </div>
</template>

<script>
    export default {
      props: {}
    }
</script>

<style lang="scss" type="text/css" scoped>
@import '../../assets/css/global.scss';

.cm-last {
  width: 102%;
  height: 2rem;
  background: $darkBackGroundColor;
  .cm-subscribe-1 {
    width: 102%;
    height: 0.66rem;
    background: $darkBackGroundColor;
    margin-left: -0.2rem;
  }
  .cm-last-val {
    width: 6.88rem;
    margin-left: 0.3rem;
    background: $contentBackgroundColor;
    box-shadow: 0 0.06rem 0.1rem 0 rgba(0, 0, 0, 0.06);
    border-radius: 0.15rem;
    span {
      @include fontStyle(
        $hanziFontFamily,
        $textdarkColor,
        0.3rem,
        0.3rem,
        0,
        null
      );
      font-family: 'PingFangSC-Regular';
      position: relative;
      left: -1.3rem;
      top: 0.2rem;
    }
    .cm-author-nofocus {
      @include fontStyle(
        $headerFontFamily,
        $serviceBtnColor,
        0.26rem,
        0.44rem,
        0,
        $textAlignCenter
      );
      height: 0.44rem;
      width: 1.2rem;
      border: 1px solid $serviceBtnColor;
      border-radius: 0.04rem;
      margin-left: auto;
    }
    .cm-last-nofocus {
      border-radius: 0.2rem;
      position: relative;
      left: -0.5rem;
      bottom: 0.25rem;
    }
  }
}
</style>
