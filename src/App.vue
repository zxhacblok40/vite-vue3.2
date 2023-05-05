<template>
  <router-view></router-view>
</template>
<script setup>
import { setTheme } from '@/theme/theme.js'
import { curTime } from '@/utils/index.js';
onMounted(() => {
  setTheme(localStorage.getItem('theme') || 'light')
  console.warn(`${import.meta.env.MODE !== 'production' ? '当前启动时间' : '当前打包时间'}`, curTime());
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
