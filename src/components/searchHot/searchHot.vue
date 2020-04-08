<template>
    <div>
        <van-tag
            round
            class="cm-lable"
            @click="$emit('hot', item)"
            v-for="(item, index) in list"
            :key="index"
        >
            {{ item.key }}
            <img
                src="../../assets/img/hot.png"
                class="cm-hot-img"
            />
        </van-tag>
    </div>
</template>

<script>
    export default {
      props: {
        list: {
          type: Array,
          required: true
        }
      }
    }
</script>

<style lang="scss" type="text/css" scoped>
@import '../../assets/css/global.scss';
.cm-lable {
  @include fontStyle(
    $headerFontFamily,
    $textdarkColor,
    0.28rem,
    0.28rem,
    0,
    null
  );
  float: left;
  height: 0.6rem;
  background: $darkBackGroundColor;
  margin-left: 0.2rem;
  margin-bottom: 0.2rem;
  padding-left: 0.2rem;
  .cm-hot-img {
    width: 0.3rem;
    height: 0.3rem;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }
}
</style>
