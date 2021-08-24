import { createApp } from 'vue'
import {
    // create naive ui
    create,
    // component
    NButton
} from 'naive-ui'
const naive = create({
    components: [NButton]
})
import App from './App.vue'

createApp(App).use(naive).mount('#app')
