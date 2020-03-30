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
      duration="0.3"
    >
      <van-tab
        v-for="(item, index) in tabNameList"
        :key="index"
        :title="item.tabShowName"
        :to="item.tabName"
        :name="item.tabName"
      >
        <app-main></app-main>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import AppMain from '../AppMain'
import axios from 'axios'
export default {
  name: 'AppTab',
  components: { AppMain },
  data() {
    return {
      active: 0,
      tabNameList: []
    }
  },

  created() {},
  mounted() {
    this.getTabName()
  },
  methods: {
    tabChange(name, title) {
      this.$router.replace(name)
    },
    updateTab() {
      let path = location.pathname
      this.tabNameList.map((item, index) => {
        if ('/' + item.tabName == path) {
          this.active = item.tabName
        }
      })
    },
    // 获取tab数据
    getTabName() {
      axios
        .get('/getNewsTabList')
        .then(response => {
          this.tabNameList = response.data.data
          // 每次获取数据，说明重新进入页面，在这里进行路由和active的绑定
          this.updateTab()
        })
        .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped></style>
