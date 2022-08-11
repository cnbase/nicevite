import { createApp } from 'vue'
import App from './Index.vue'

const app = createApp(App)

window.niceApp = app

// app.config.globalProperties.$message = message;

app.mount('#app')