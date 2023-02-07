<template>
  <button @click="setTheme('light')">白天</button>
  <button @click="setTheme('dark')">黑夜</button>
  <div class="home" v-loading="loading">
    {{ home }}
    <div>1023456</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { setTheme } from '@/theme/theme.js'
import { useDemoStore } from '@/stores/demo.js'
import { useCounterStore } from '@/stores/counter.js'
const home = ref('home')
const store = useDemoStore()
const store2 = useCounterStore()
const loading = ref(true)
setTimeout(() => {
  loading.value = false
}, 3000)
console.log('store', store)
console.log('store2', store2)
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 375px;
  border-radius: @round8;
  color: @color;
}
</style>
