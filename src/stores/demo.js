export const useDemoStore = defineStore('useDemoStore', () => {
  const demo = ref(0)
  const doubleDemo = computed(() => demo.value * 2)
  function increment() {
    demo.value = demo.value + 1
  }

  return { demo, doubleDemo, increment }
})
