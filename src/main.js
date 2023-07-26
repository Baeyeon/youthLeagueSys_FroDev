import { createApp, Vue } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import axios from 'axios'
import qs from 'qs'
import VueAxios from 'vue-axios'

const app=createApp(App)
app.use(VueAxios, axios)
app.use(qs)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')


