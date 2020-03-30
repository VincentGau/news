<template>
  <div class="tabbar">
    <van-tabs
      v-model="active"
      swipeable
      animated
      @change="tabChange"
      color="#00C3AC"
      title-active-color="#00C3AC"
      line-width="32px"
      line-height="2px"
      swipe-threshold="5"
    >
      <van-tab
        v-for="(item, index) in tab"
        :key="index"
        :title="item.title"
        :to="item.url"
        :name="item.name"
      >
        <app-main></app-main>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import AppMain from '../AppMain'

export default {
  name: 'AppTab',
  components: { AppMain },
  data() {
    return {
      active: 1,
      tab: [
        {
          name: 'recommend',
          title: '推荐',
          url: 'recommend'
        },
        {
          name: 'news',
          title: '要闻',
          url: 'news'
        },
        {
          name: 'fund',
          title: '基金',
          url: 'fund'
        },
        {
          name: 'financing',
          title: '理财',
          url: 'financing'
        },
        {
          name: 'preciousMetal',
          title: '贵金属',
          url: 'preciousMetal'
        }
      ] //后台获取tab标签
    }
  },
  mounted() {
    this.updateTab() //刷新H5时
  },
  methods: {
    tabChange(name, title) {
      this.$router.replace(name)
    },
    updateTab() {
      let path = location.pathname
      this.tab.map((item, index) => {
        if ('/' + item.name == path) {
          this.active = item.name
        }
      })
    }
  }
}
</script>

<style scoped></style>
