<template>
  <div class="cm-last">
    <div class="cm-subscribe-1"></div>
    <div class="cm-last-val">
      <span>以上都不是，向客服提问吧</span>
      <div class="cm-author-nofocus cm-last-nofocus" @click="$emit('problem')">
        提问
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {}
}
</script>

<style scoped>
.cm-subscribe-1 {
  width: 102%;
  height: 0.66rem;
  background: #f1f1f1;
  margin-left: -0.2rem;
}
.cm-last {
  width: 102%;
  height: 2rem;
  background: #f1f1f1;
}
.cm-last1 {
  width: 102%;
  height: 1.2rem;
  background: #f1f1f1;
}
.cm-last-val {
  width: 6.88rem;
  margin-left: 0.3rem;
  background: #ffffff;
  box-shadow: 0 0.06rem 0.1rem 0 rgba(0, 0, 0, 0.06);
  border-radius: 0.15rem;
}
.cm-last-val span {
  font-family: 'PingFangSC-Regular';
  font-size: 0.3rem;
  color: #333333;
  letter-spacing: 0;
  line-height: 0.3rem;
  position: relative;
  left: -1.3rem;
  top: 0.2rem;
}
.cm-last-nofocus {
  border-radius: 0.2rem;
  position: relative;
  left: -0.5rem;
  bottom: 0.25rem;
}
.cm-subscribe-authorInfo {
  border-bottom: 0.02rem solid #f1f1f1;
}
.cm-subscribe-author-img {
  margin-left: 0.1rem;
}
</style>
