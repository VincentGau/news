<template>
  <div class="cm-news-item">
    <router-link
      :to="{ path: '/articleDetails', query: { articleId: article.docId } }"
    >
      <div class="cm-news-abstract">
        <div class="cm-news-tit">
          <span>{{ article.title }}</span>
        </div>
        <div class="cm-news-info">
          <span class="cm-news-name">{{ article.source }}</span>
          <span class="cm-news-read">{{ article.readNum }}阅读</span>
          <span class="cm-news-date">{{
            article.publishTime ? article.publishTime.substring(0, 10) : ''
          }}</span>
        </div>
      </div>
      <div class="cm-news-img">
        <img :src="article.coverUrl" />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped></style>
