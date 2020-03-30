<template>
  <div class="cm-history" v-show="show">
    <div class="cm-history-name">历史搜索</div>
    <div
      class="cm-history-vals"
      v-for="(item, index) in list"
      :key="index"
      @click="$emit('history', item)"
      v-show="showclear"
    >
      <div class="cm-history-val">
        <img src="../assets/img/v-search@2x.png" class="cm-history-img" />
        <span>{{ item.val }}</span>
      </div>
    </div>
    <div class="cm-clears" @click="$emit('showclears')" v-show="showclear">
      <img src="../assets/img/v-clears@2x.png" />
      <span class="cm-clears-val">清空搜索记录</span>
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
.cm-history {
  width: 100%;
  position: fixed;
  top: 3.35rem;
  bottom: 0;
  background: #ffffff;
  margin-top: 0.3rem;
}
.cm-history-name {
  position: relative;
  left: -2.8rem;
  font-family: 'PingFangSC-Regular';
  font-size: 17px;
  color: #222222;
  letter-spacing: 0;
  line-height: 0.61rem;
}
.cm-history-vals {
  padding-left: 0.2rem;
}
.cm-history-val {
  background: #ffffff;
  height: 0.9rem;
  border-bottom: 1px solid #dbdbdb;
}
.cm-history-val span {
  float: left;
  margin-left: 0.15rem;
  margin-top: 0.3rem;
  font-family: 'PingFang-SC-Medium';
  font-size: 15px;
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
.cm-clears img {
  width: 0.3rem;
  margin-right: 0.1rem;
  margin-top: 0.05rem;
}
.cm-clears-val {
  font-family: 'PingFang-SC-Medium';
  font-size: 13px;
  color: #999999;
  letter-spacing: 0;
  line-height: 0.25rem;
  text-align: center;
  margin-top: 0.3rem;
}
</style>
