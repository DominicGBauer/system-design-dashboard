import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import JsonCSV from './components/JsonCSV.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.use(store)
app.component('download-csv', JsonCSV)
app.mount('#app')
