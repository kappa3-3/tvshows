import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DetailedView from '../views/DetailedView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tvshow/:id',
    name: 'tvshow',
    component: DetailedView
  }
]

const router = new VueRouter({
  routes
})

export default router
