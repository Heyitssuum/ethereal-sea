import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './views/Login.vue'
import Yield from './views/Yield.vue'
import App from './App.vue'

Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/yield',
    name: 'Yield',
    component: Yield
  }
]

const router = new VueRouter({
  routes
})

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

