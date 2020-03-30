<template>
  <div>
    <van-tag
      round
      class="cm-lable"
      @click="$emit('hot', item)"
      v-for="(item, index) in list"
      :key="index"
    >
      {{ item.key }}
      <img src="../assets/img/hot.png" class="cm-hot-img" />
    </van-tag>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.cm-lable {
  float: left;
  height: 0.6rem;
  background: #f1f1f1;
  font-family: 'PingFang-SC-Medium';
  font-size: 0.28rem;
  color: #333330;
  letter-spacing: 0;
  line-height: 0.28rem;
  margin-left: 0.2rem;
  margin-bottom: 0.2rem;
  padding-left: 0.2rem;
}
.cm-hot-img {
  width: 0.3rem;
  height: 0.3rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
}
</style>
