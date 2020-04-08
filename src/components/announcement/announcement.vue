<template>
  <div class="cm-statement-content">
    <p>
      免责声明: 本信息由第三方提供, 不代表农行立场, 本行对其所导
      致的结果不承担责任。
    </p>
  </div>
</template>

<script>
export default {
  props: {},
}
</script>
<style lang="scss" type="text/css" scoped>
@import '../../assets/css/global.scss';
.cm-statement-content p {
  @include fontStyle(
    $hanziFontFamily,
    $textLightColor,
    0.28rem,
    0.42rem,
    0,
    $textAlignLeft
  );
  // color: $testLightColor;
}
</style>
