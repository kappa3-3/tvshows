import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TvShow from '../components/TvShow.vue'
// import ShowDetails from '../views/ShowDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tvshows/:id',
    name: 'TvShow',
    component: TvShow
  }
]

const router = new VueRouter({
  routes
})

export default router
