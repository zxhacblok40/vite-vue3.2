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
const { proxy } = getCurrentInstance()
const init = async () => {
  const data = await proxy.$api.login({
    username: 'admin',
    password: '123456'
  })
  console.log(data)
}
onMounted(() => {
  init()
})

</script>

<style lang="less" scoped></style>
