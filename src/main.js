import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import router from './router'
import store from './store'
// eslint-disable-next-line
import filters from './filters'

Vue.config.productionTip = false

new Vue({
  i18n,

  router,

  store,

  render: h => h(App)
}).$mount('#app')
