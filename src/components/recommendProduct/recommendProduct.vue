<template>
  <!-- 推荐产品 -->
  <div class="cm-recommend-item">
    <router-link :to="{ path: '', query: {} }">
      <div class="cm-product-rise">
        <span>{{ product.advContent }}</span>
        <span>{{ product.desProfit }}</span>
      </div>
      <div class="cm-product-name">
        <span>{{ product.advTitle }}{{ product.productCod }}</span
        ><span>{{ product.levelRisk }}</span>
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
<style scoped>
.cm-recommend-item {
  padding: 0.2rem 0;
  padding-left: 0.32rem;
}

.cm-recommend-item div span {
  display: block;
  overflow: hidden;
  white-space: nowrap;
}
.cm-product-rise {
  width: 1.9rem;
  display: inline-block;
}
.cm-product-rise span:nth-child(1) {
  font-family: 'SFUIDisplay-Light';
  font-size: 0.44rem;
  color: #fe6960;
  letter-spacing: 0;
  line-height: 0.36rem;
}
.cm-product-rise span:nth-child(2) {
  font-family: 'PingFangSC-Regular';
  font-size: 0.26rem;
  color: #999999;
  letter-spacing: 0;
  line-height: 0.26rem;
  margin-top: 0.16rem;
}

.cm-product-name {
  width: 4.5rem;
  margin-left: 0.5rem;
  display: inline-block;
}
.cm-product-name span:nth-child(1) {
  font-family: 'PingFangSC-Regular';
  font-size: 0.32rem;
  color: #333333;
  letter-spacing: 0;
}
.cm-product-name span:nth-child(2) {
  font-family: 'PingFangSC-Regular';
  font-size: 0.26rem;
  color: #999999;
  letter-spacing: 0;
  line-height: 0.26rem;
  margin-top: 0.16rem;
}
</style>
