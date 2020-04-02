<template>
  <div>
    <div
      class="cm-history-vals"
      v-for="(item, index) in list"
      :key="index"
      @click="$emit('history', item)"
      v-show="showclear"
    >
      <div class="cm-history-val">
        <img src="../../assets/img/v-search@2x.png" class="cm-history-img" />
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    },
    showclear: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      aaa: [1, 2, 3, 4, 5]
    }
  },
  methods: {}
}
</script>

<style scoped>
.cm-history-vals {
  padding-left: 0.3rem;
}
.cm-history-val {
  background: #ffffff;
  height: 0.9rem;
  border-bottom: 0.02rem solid #dbdbdb;
}
.cm-history-val span {
  float: left;
  margin-left: 0.15rem;
  margin-top: 0.3rem;
  font-family: 'PingFang-SC-Medium';
  font-size: 0.3rem;
  color: #666666;
  letter-spacing: 0;
  line-height: 0.29rem;
}
.cm-history-img {
  float: left;
  margin-top: 0.28rem;
  top: 0.1rem;
  left: -2.5rem;
  width: 0.4rem;
}
</style>
