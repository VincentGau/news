<template>
  <div class="cm-article-praise">
    <img
      v-if="ispraise"
      src="../../assets/img/praise-icon@2x.png"
      @click="cancelPraise"
    />

    <img v-else src="../../assets/img/nopraise-icon@2x.png" @click="givePraise" />

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

<style scoped>
.cm-article-praise {
  margin: 0.32rem auto;
  height: 0.98rem;
  width: 0.96rem;
  position: relative;
  background: #fff;
}

.cm-article-praise img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  box-shadow: #f1f1f1 0px 0px 10px;
}

.cm-article-praise span {
  position: absolute;
  width: 0.96rem;
  text-align: center;
  left: 0;
  bottom: 0.15rem;
  font-family: 'SFUIDisplay-Regular';
  font-size: 0.2rem;
  color: #999999;
  letter-spacing: 0;
  line-height: 0.2rem;
}
</style>
