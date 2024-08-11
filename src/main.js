import { createApp } from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import './assets/main.scss'
import './assets/main.css'

const app = createApp(App)
app.use(Buefy)

// Provide Buefy toast service for Vue components
app.provide('buefyToast', app.config.globalProperties.$buefy.toast)

app.mount('#app')
