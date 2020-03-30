<template>
  <div class="cm-hot" v-show="show">
    <div class="cm-hot-name">热门搜索</div>
    <div class="cm-lables">
      <van-tag
        round
        class="cm-lable"
        @click="$emit('hot', item)"
        v-for="(item, index) in list"
        :key="index"
      >
        {{ item.val }}
        <img src="../assets/img/hot.png" class="cm-hot-img" />
      </van-tag>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    },
    list: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.cm-hot {
  background: #ffffff;
}
.cm-hot .cm-hot-name {
  position: relative;
  left: -2.8rem;
  top: 0.2rem;
  font-family: 'PingFang-SC-Medium';
  font-size: 17px;
  color: #222222;
  letter-spacing: 0;
  text-align: center;
  line-height: 0.3rem;
  margin-bottom: 0.2rem;
}
.cm-lables {
  padding-top: 0.45rem;
  padding-left: 0.2rem;
  background: #ffffff;
  height: 1.5rem;
}
.cm-lable {
  float: left;
  height: 0.4rem;
  background: #f1f1f1;
  font-family: 'PingFang-SC-Medium';
  font-size: 14px;
  color: #333330;
  letter-spacing: 0;
  line-height: 0.29rem;
  margin-left: 0.2rem;
  margin-bottom: 0.2rem;
}
.cm-hot-img {
  width: 0.3rem;
  height: 0.3rem;
  margin-left: 0.15rem;
}
</style>
