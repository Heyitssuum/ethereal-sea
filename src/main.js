import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './views/Login.vue'
import Yield from './views/Yield.vue'

Vue.config.productionTip = false

const routes = [
  {
    path: '/login',
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

Vue.config.productionTip = false

new Vue({
  router
}).$mount('#app')

