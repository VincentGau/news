<template>
  <div>
    <app-header></app-header>
    <app-tab></app-tab>
    <!-- <app-main></app-main> -->
  </div>
</template>
<script>
// 会导入 ./AppHeader 下面的 index.vue组件
import AppHeader from './AppHeader'
import AppTab from './AppTab'
import AppMain from './AppMain'

export default {
  components: { AppHeader, AppTab, AppMain }
}
</script>
<style scoped></style>
