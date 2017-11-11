import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/landing/Login'
import Landing from '../components/landing/Landing'
import Sidebar from '../components/base_components/Sidebar'

Vue.use(Router)
const router = new Router({
  mode: history,
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      components: {
        sidebar: Sidebar,
        default: Landing
      }
    }
  ]
})

export default router
