// @ts-nocheck
import Vue from 'vue'
import router from './router'
import i18n from './i18n'
import store from './store'
import './plugins'
import '@/components'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: (h) => h(App)
}).$mount('#app')
