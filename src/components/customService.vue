<template>
  <div class="cm-last">
    <div class="cm-subscribe-1"></div>
    <div class="cm-last-val">
      <span>{{ val }}</span>
      <div class="cm-author-nofocus cm-last-nofocus" @click="$emit('problem')">
        {{ butval }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    val: {
      type: String,
      required: true
    },
    butval: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.cm-subscribe-1 {
  width: 102%;
  height: 0.88rem;
  background: #f1f1f1;
  margin-left: -0.2rem;
}
.cm-last {
  width: 102%;
  height: 2.98rem;
  background: #f1f1f1;
}
.cm-last-val {
  width: 6.88rem;
  margin-left: 0.3rem;
  background: #ffffff;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.06);
  border-radius: 0.15rem;
}
.cm-last-val span {
  font-family: 'PingFangSC-Regular';
  font-size: 15px;
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
  border-bottom: 1px solid #f1f1f1;
}
.cm-subscribe-author-img {
  margin-left: 0.1rem;
}
</style>
