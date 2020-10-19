import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'App',
    component: () => import('../App.vue'),
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/plans',
    name: 'Plans',
    component: () => import('../views/Plans.vue')
  },
  {
    path: '/tests',
    name: 'Tests',
    component: () => import('../views/Tests.vue')
  },
  {
    path: '/tests/:id',
    name: 'TestDetail',
    component: () => import('../views/TestDetail.vue')
  },
  {
    path: '/devices',
    name: 'Devices',
    component: () => import('../views/Devices.vue')
  },
  {
    path: '/execution',
    name: 'Execution',
    component: () => import('../views/Execution.vue')
  },
  {
    path: '/tags',
    name: 'Tags',
    component: () => import('../views/Tags.vue')
  },
  {
    path: '/usersettings',
    name: 'UserSettings',
    component: () => import('../views/UserSettings.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
