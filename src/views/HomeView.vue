<template>
  <button @click="setTheme('light')">白天</button>
  <button @click="setTheme('dark')">黑夜</button>
  <div class="home" v-loading="loading">
    {{ home }}
    <div>1023456</div>
  </div>
</template>

<script setup>
import { setTheme } from '@/theme/theme.js'
const home = ref('home')
const loading = ref(true)
setTimeout(() => {
  loading.value = false
}, 3000)
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 375px;
  background-color: @bgColor;
  border-radius: @round8;
  color: @color;
}
</style>
