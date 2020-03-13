import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AttractionReviewsIndex from '../views/AttractionReviewsIndex.vue'

Vue.use(VueRouter)

const routes = [
                { path: '/', name: 'root', component: Home },
                { path: "/attraction-review", name: "attraction-review", component: AttractionReviewsIndex }
               ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
