import {createApp} from 'vue'
import {createPinia} from 'pinia'
import {createI18n} from "vue-i18n";
import english from '../src/locales/english.json'
import russian from '../src/locales/russian.json'
import ukraine from '../src/locales/ukraine.json'
import vClickOutside from "click-outside-vue3"


const messages = {
    english,
    ukraine,
    russian
}

import App from './App.vue'
import router from './router'

const app = createApp(App)
const i18n = createI18n({
    locale: 'ukraine',
    fallbackLocale: 'en',
    messages
})

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
app.use(vClickOutside)
