import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDemoStore = defineStore('demo', () => {
  const demo = ref(0)
  const doubleDemo = computed(() => demo.value * 2)
  function increment() {
    demo.value = demo.value + 1
  }

  return { demo, doubleDemo, increment }
})
