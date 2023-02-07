<template >
  <article v-if="show" class="article">
    this is article
    <div class="article-btn">hide</div>
  </article>
</template>

<script setup>
const show = ref(false)
</script>

<style lang="less" scoped>
.article {
  position: absolute;
  top: 0;
  left: 0;
  width: 270px;
  height: 100%;
  z-index: 2001;
  background-color: red;
}
</style>
