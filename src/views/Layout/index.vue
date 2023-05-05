<template>
  <Header />
  <Main />
  <Tabbar />
  <Article />
</template>

<script setup>
import Header from './components/header.vue'
import Main from './components/main.vue'
import Tabbar from './components/tabbar.vue'
import Article from './components/article.vue'
const api = inject('api')
const init = () => console.log(api.login);
onMounted(() => init())

</script>

<style lang="less" scoped></style>
