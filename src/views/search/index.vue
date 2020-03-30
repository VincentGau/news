<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="输入关键词查询"
        @search="onSearch"
        @cancel="onCancel"
        @clear="onclear"
        @blur="onblur"
      />
    </form>
    <!-- 热门 -->
    <SearchHot :show="show" :list="list" @hot="hotval($event)" />
    <!-- 历史 -->
    <SearchHistory
      :show="show"
      :list="list"
      :showclear="showclear"
      @history="history($event)"
      @showclears="showclears()"
    />
    <!-- 结果 -->
    <SearchBar :show="show" :result="result" />
  </div>
</template>

<script>
import SearchHistory from '@/components/searchHistory.vue'
import SearchHot from '@/components/searchHot.vue'
import ListItem from '@/components/ListItem.vue'
import SearchBar from '@/components/searchBar.vue'
import '../../assets/css/master.css'
import '../../mock/mock.js'
import Axios from 'axios'
export default {
  components: {
    ListItem,
    SearchBar,
    SearchHot,
    SearchHistory
  },
  data() {
    return {
      value: '',
      show: true,
      showclear: true,
      aaa: 'tag',
      list: [],
      result: []
    }
  },
  created() {
    this.inita()
  },
  methods: {
    showclears() {
      this.showclear = false
    },
    onblur() {
      if (this.value == '') {
        this.show = true
      } else {
        this.show = false
      }
    },
    onclear() {
      this.show = true
    },
    inita() {
      console.log('sssss')
      Axios.get('/getList').then(data => {
        this.list = data.data.data
        this.list.forEach(element => {
          var i = 0
          if (i < 3) {
            this.result.push(element)
            i++
          }
        })
        console.log(this.result)
      })
    },
    hotval(item) {
      this.value = item.val
      this.show = false
    },
    history(item) {
      console.log(11121212, item)
      this.value = item.val
      this.show = false
    },
    onSearch(val) {
      if (val == '') {
        this.show = true
      } else {
        this.show = false
      }
    },
    onCancel() {
      this.$router.push('/recommend')
    }
  }
}
</script>
<style scoped></style>
