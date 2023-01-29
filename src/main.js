import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index.js'
import i18n from './locales/index.js';
import directive from './utils/directive.js'

import './assets/css/default.css'
import './theme/theme.less'
import 'amfe-flexible/index.js'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(i18n)
directive(app)
app.mount('#app')
