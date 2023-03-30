import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import 'element-plus/dist/index.css'; /****我测你吗 */
import { createHead } from '@vueuse/head'; //创建html head标签
import '@/assets/styles/iconfont/iconfont.less';
import '@/assets/styles/tailwind/index.css'; //创建响应式样式
import ElementPlus from 'element-plus';
import Video from 'video.js';
import 'video.js/dist/video-js.css';
import setupLocatorUI from '@locator/runtime';
if (process.env.NODE_ENV === 'development') {
  setupLocatorUI({
    adapter: 'vue'
  });
}
const head = createHead();
const pinia = createPinia();
const app = createApp(App).use(router).use(pinia).use(head).use(ElementPlus);
app.config.globalProperties.$video = Video;

app.mount('#app');
