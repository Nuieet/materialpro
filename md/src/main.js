import {
    createApp
  } from 'vue'
  import ElementPlus from 'element-plus';
  //import 'element-plus/lib/theme-chalk/index.css';
  import 'element-plus/dist/index.css';
  import App from './App.vue'
  import router from './router'
  import Vant from 'vant';
  import 'vant/lib/index.css';

  const app = createApp(App).use(router).use(Vant).use(ElementPlus).mount('#app')
  
