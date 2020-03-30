<template>
  <div class="cm-news-item">
    <div class="cm-news-abstract">
      <div class="cm-news-tit">
        <span>{{ newsContent.title }}</span>
      </div>
      <div class="cm-news-info">
        <span class="cm-news-name">{{ newsContent.source }}</span>
        <span class="cm-news-read">{{ newsContent.readNum }}阅读</span>
        <span class="cm-news-date">{{ newsContent.publishTime }}</span>
      </div>
    </div>
    <div class="cm-news-img">
      <img :src="require('../../assets/img/' + newsContent.coverUrl)" />
    </div>
  </div>
</template>
<script>
import '../../assets/css/master.css'
export default {
  props: {
    newsItem: Object
  },
  data() {
    return {
      newsContent: {
        docId: '1112222',
        title: '广发基金刘格菘：2020年如何把握科技投资机遇',
        content: '正文',
        coverUrl: 'news2-img.png',
        source: '消息来源',
        class: '分类',
        publishTime: '2020-02-27 20:10:14',
        readNum: 0,
        likeNum: 0
      }
    }
  }
}
</script>
<style scoped></style>
