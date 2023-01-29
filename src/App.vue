<template>
  <router-view></router-view>
</template>
<script setup>
import { setTheme } from '@/theme/theme.js'
onMounted(() => {
  setTheme(localStorage.getItem('theme') || 'light')
})
</script>

<style>
html,
body {
  height: 100vh;
}
</style>
