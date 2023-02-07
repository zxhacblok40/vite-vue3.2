import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useHeader = defineStore('header', () => {
  const showArticle = ref(0)
  function setArticle(item) {
    showArticle.value = item
  }

  return { showArticle, setArticle }
})
