import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      redirect: '/',
      component: () => import('@/views/Layout/index.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/Home/index.vue')
        },
        {
          path: 'my',
          name: 'my',
          component: () => import('@/views/My/index.vue')
        }
      ]
    }
  ]
})

export default router
