import { createRouter, createWebHistory } from 'vue-router'
import BlogFrontPage from '@/components/BlogFrontPage.vue'
import BlogPost from '@/components/BlogPost.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: BlogFrontPage
  },
  {
    path: '/post/:id',
    name: 'BlogPost',
    component: BlogPost
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router