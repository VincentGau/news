<template>
  <div class="cm-result" v-show="!show">
    <div class="cm-result-header">
      <span>资讯</span>
    </div>
    <ListItem v-for="item in result" :key="item.id" :artical="item" />
    <!-- 订阅 -->
    <div class="cm-subscribe">
      <div class="cm-subscribe-1"></div>
      <div class="cm-subscribe-header">
        <span>订阅号</span>
      </div>
      <div
        class="cm-article-authorInfo subscribe-authorInfo"
        v-for="(item, index) in result"
        :key="index"
      >
        <div class="cm-author-img subscribe-author-img">
          <img src="../assets/img/hot.png" />
          <img src="../assets/img/v-icon@3x.png" />
        </div>
        <div class="cm-author-nameInfo">
          <p class="subscribe_val">{{ item.source }}</p>
          <p>{{ item.people }}</p>
        </div>
        <div class="cm-author-nofocus cm-subscribe-nofocus">关注</div>
      </div>
    </div>
    <div class="cm-last">
      <div class="cm-subscribe-1"></div>
      <div class="cm-last-val">
        <span>以上都不是，向客服提问吧</span>
        <div class="cm-author-nofocus cm-last-nofocus">提问</div>
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue'
export default {
  components: {
    ListItem
  },
  props: {
    show: {
      type: Boolean,
      required: true
    },
    result: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.cm-result {
  padding-left: 0.2rem;
  background: #ffffff;
}
.cm-result-header {
  background: #ffffff;
  height: 0.8rem;
  border-bottom: 1px solid #f1f1f1;
}
.cm-result-header span {
  position: relative;
  left: -3.1rem;
  font-family: 'PingFangSC-Regular';
  font-size: 17px;
  color: #222222;
  letter-spacing: 0;
  line-height: 0.31rem;
}
/* 订阅 */
.cm-subscribe-1 {
  width: 102%;
  height: 0.2rem;
  background: #f1f1f1;
  margin-left: -0.2rem;
}
.cm-subscribe {
  position: relative;
  top: 0.2rem;
}
.cm-subscribe-header {
  background: #ffffff;
  height: 0.98rem;
}
.cm-subscribe-header span {
  position: relative;
  left: -3.1rem;
  top: 0.2rem;
  font-family: 'PingFangSC-Regular';
  font-size: 17px;
  color: #222222;
  letter-spacing: 0;
  line-height: 0.31rem;
}
.cm-subscribe-nofocus {
  position: relative;
  left: -0.5rem;
}
.cm-last {
  width: 102%;
  height: 100%;
  background: #f1f1f1;
  margin-left: -0.2rem;
}
.cm-last-val {
  width: 6.5rem;
  margin-left: 0.5rem;
  background: #ffffff;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.06);
  border-radius: 0.15rem;
}
.cm-last-val span {
  font-family: 'PingFangSC-Regular';
  font-size: 15px;
  color: #333333;
  letter-spacing: 0;
  line-height: 15px;
  position: relative;
  left: -0.5rem;
  top: 0.22rem;
}
.cm-last-nofocus {
  border-radius: 0.2rem;
  position: relative;
  left: -0.5rem;
  bottom: 0.15rem;
}
.cm-subscribe-authorInfo {
  border-bottom: 1px solid #f1f1f1;
}
.cm-subscribe-author-img {
  margin-left: 0.1rem;
}
</style>
