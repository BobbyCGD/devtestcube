import { createRouter, createWebHistory } from 'vue-router'
import BlogFrontPage from '@/components/BlogFrontPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: BlogFrontPage
  },
  // Add more routes here as needed
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router