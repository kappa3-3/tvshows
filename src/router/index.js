import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DetailedView from '../views/DetailedView.vue'
// import TvShow from '../components/TvShow.vue'
import store from '../store'

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
    // props: true,
    props: {
      default: true,
      props: { store }
    },
    component: DetailedView
    // component: () =>
    //   import(
    //     '../views/DetailedView.vue'
    //   )
  }
]

const router = new VueRouter({
  routes
})

export default router
