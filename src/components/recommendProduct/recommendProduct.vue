<template>
    <!-- 推荐产品 -->
    <div class="cm-recommend-item">
        <router-link :to="{ path: '', query: {} }">
            <div class="cm-product-rise">
                <span>{{ product.advContent }}</span>
                <span>{{ product.desProfit }}</span>
            </div>
            <div class="cm-product-name">
                <span>{{ product.advTitle }}{{ product.productCod }}</span><span>{{ product.levelRisk }}</span>
            </div>
        </router-link>
    </div>
</template>
<script>
    export default {
      props: {
        product: {
          type: Object,
          required: true
        }
      },
      methods: {}
    }
</script>
<style lang="scss" type="text/css" scoped>
@import '../../assets/css/global.scss';
.cm-recommend-item {
  padding: 0.2rem 0;
  padding-left: 0.32rem;
  div {
    span {
      display: block;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  .cm-product-rise {
    width: 1.9rem;
    display: inline-block;
    span:nth-child(1) {
      @include fontStyle(
        $numberFontFamily,
        $recommendInterestRate,
        0.44rem,
        0.44rem,
        0,
        $textAlignLeft
      );
    }
    span:nth-child(2) {
      margin-top: 0.16rem;
      @include fontStyle(
        $hanziFontFamily,
        $textLowColor,
        0.26rem,
        0.26rem,
        0,
        $textAlignLeft
      );
    }
  }
  .cm-product-name {
    width: 4.5rem;
    margin-left: 0.5rem;
    display: inline-block;
    span:nth-child(1) {
      @include fontStyle(
        $hanziFontFamily,
        $textdarkColor,
        0.32rem,
        0.32rem,
        0,
        $textAlignLeft
      );
    }
    span:nth-child(2) {
      margin-top: 0.16rem;
      @include fontStyle(
        $hanziFontFamily,
        $textLowColor,
        0.26rem,
        0.26rem,
        0,
        $textAlignLeft
      );
    }
  }
}
</style>
