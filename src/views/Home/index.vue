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
import { useDemoStore } from '@/stores/demo.js'
const home = ref('home')
const store = useDemoStore()
const loading = ref(true)
console.log('store', store)
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 375px;
  border-radius: @round8;
  color: @color;
}
</style>
