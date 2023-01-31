<template>
  <router-view></router-view>
</template>
<script setup>
import { setTheme } from '@/theme/theme.js'
onMounted(() => {
  setTheme(localStorage.getItem('theme') || 'light')
})
</script>

<style lang="less">
html {
  height: 100%;
}

body {
  height: 100%;
  background-color: @bgColor;
}
</style>
