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
                <img
                    src="../../assets/img/v-search@2x.png"
                    class="cm-history-img"
                />
                <span>{{ item.key }}</span>
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
        return {}
      },
      methods: {}
    }
</script>

<style lang="scss" type="text/css" scoped>
@import '../../assets/css/global.scss';
.cm-history-vals {
  padding-left: 0.3rem;
  .cm-history-val {
    background: $contentBackgroundColor;
    height: 0.9rem;
    border-bottom: 0.02rem solid #dbdbdb;
    span {
      @include fontStyle(
        $headerFontFamily,
        $textLightColor,
        0.3rem,
        0.29rem,
        0,
        null
      );
      float: left;
      margin-left: 0.15rem;
      margin-top: 0.3rem;
    }
    .cm-history-img {
      float: left;
      margin-top: 0.28rem;
      top: 0.1rem;
      left: -2.5rem;
      width: 0.4rem;
    }
  }
}
</style>
