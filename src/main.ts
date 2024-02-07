import './assets/main.css'

import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import App from './App.vue'
import './index.css'
import { vMediaRef } from './directives/VMediaRef'

createApp(App).use(plugin, defaultConfig).directive('media-ref', vMediaRef).mount('#app')
// remember, each Vue plugin needs its own .use()
// .use(router).use(plugin2)
