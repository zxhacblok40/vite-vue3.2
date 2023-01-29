import { createVNode, render } from 'vue'
import loading from '../components/loading.vue'
export default (app) => {
  app.directive('loading', (el, binding) => {
    el.style.position = 'relative'
    if (binding.value) {
      const loadinVnode = createVNode(loading)
      render(loadinVnode, el)
    } else {
      Array.from(el.children).some(item => {
        if (item.id === 'loading') {
          item.remove()
        }
      })
    }
  })
}
