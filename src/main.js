import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes.js'
import i18n from './i18n/i18n.js'

import './assets/main.css'

import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes
})

let app = createApp(App);

app.use(router);
app.use(i18n);

app.mount('#app');

// app.config.errorHandler = (err) => {
//     console.log("HEY THIS THE ERROR HANDLER THAT DOES NOT HANDLE ANYTHING")
// }
