<template>
    <div class="cm-last">
        <div class="cm-last-val">
            <span>以上都不是，向客服提问吧！</span>
            <div
                class="cm-service-btn"
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
  .cm-last-val {
    margin: auto;
    width: 6.88rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.2rem;
    background: $contentBackgroundColor;
    box-shadow: 0 0.06rem 0.1rem 0 rgba(0, 0, 0, 0.06);
    border-radius: 0.1rem;
     
    span {
      @include fontStyle(
        $hanziFontFamily,
        $textdarkColor,
        0.3rem,
        1.2rem,
        0,
        $textAlignLeft
      );  
      margin-left: 0.28rem;
    }
    .cm-service-btn { 
      margin-right: .34rem;
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
      border-radius: 0.24rem;
       
    }
    
  }
}
</style>
