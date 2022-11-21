import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'default-passive-events'

const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
  if (store.$id === 'menu') {
    store.$subscribe((_, state) => {
      sessionStorage.setItem('state', JSON.stringify(state))
    })
  }
})

app.use(pinia)
app.use(router)

app.mount('#app')
