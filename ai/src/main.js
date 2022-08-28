import { createApp } from 'vue'
import Varlet from '@varlet/ui'
import '@varlet/ui/es/style.js'
import Vant from 'vant';
import 'vant/lib/index.css';
import App from './App.vue'
import router from './router'
import store from './store'

import "lib-flexible/flexible"




createApp(App).use(store).use(Varlet).use(router).use(Vant).mount('#app')