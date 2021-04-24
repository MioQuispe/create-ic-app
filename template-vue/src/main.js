import { createApp } from 'vue'
import App from './App.vue'

/**
 * @dfinity/agent requires this. Can be removed once it's fixed
 */
window.global = window

createApp(App).mount('#app')
