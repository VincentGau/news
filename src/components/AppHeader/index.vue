<template>
  <div class="header">
    <van-nav-bar :title="title" left-text="" left-arrow>
      <van-icon name="search" slot="right" />
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: this.$route.meta.title
    }
  },
  watch: {
    $route(to, from) {
      this.title = this.$route.meta.title
    }
  }
}
</script>

<style scoped>
.van-nav-bar__left .van-nav-bar__arrow {
  font-size: 0.4rem;
  color: #333333;
}
.van-nav-bar__right .van-icon-search {
  font-size: 0.4rem;
  color: #666666;
}
.van-nav-bar__title {
  font-size: 0.36rem;
  font-family: 'PingFangSC-Medium';
  color: #000000;
  letter-spacing: 0.58px;
  text-align: center;
}
.header .van-hairline--bottom::after {
  border-bottom-color: white;
}
</style>
