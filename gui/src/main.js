import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import _ from 'lodash'

Vue.config.productionTip = false
Object.defineProperty(Vue.prototype, '$_', { value: _ })

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
