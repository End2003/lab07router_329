import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import mainpage from '../views/mainpage.vue'
import Newcard from '../components/NewcardHead.vue'

import ANewcard_1 from '../components/Anewcard1.vue'
import ANewcard_2 from '../components/Anewcard2.vue'
import ANewcard_3 from '../components/Anewcard3.vue'
import ANewcard_4 from '../components/Anewcard4.vue'
import ANewcard_5 from '../components/Anewcard5.vue'
import ANewcard_6 from '../components/Anewcard6.vue'

const shopRoutes = [
  { name: 'news_1', component: ANewcard_1, shop: 'Yello' },
  { name: 'news_2', component: ANewcard_2, shop: 'Krisp Cafe' },
  { name: 'news_3', component: ANewcard_3, shop: 'Goon-Bread&Brunch' },
  { name: 'news_4', component: ANewcard_4, shop: 'Graincafe.cnx' },
  { name: 'news_5', component: ANewcard_5, shop: 'Transit Number 8' },
  { name: 'news_6', component: ANewcard_6, shop: 'glin.cafe' }
]

const routes = [
  {
    path: '/',
    name: 'main',
    component: mainpage
  },
  {
    path: '/news',
    name: 'allnews',
    component: Newcard
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  }
]

shopRoutes.forEach((route) => {
  routes.push({
    path: `/news/${encodeURIComponent(route.shop)}`,
    name: route.name,
    component: route.component,
    props: true
  })
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
