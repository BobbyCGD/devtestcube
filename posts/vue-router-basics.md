# Vue Router Basics

Vue Router is the official routing library for Vue.js applications. It seamlessly integrates with Vue to create Single Page Applications with dynamic, nested routes. Let's explore the basics of Vue Router!

## Getting Started with Vue Router

1. **Installation:** In your Vue project, install Vue Router:

npm install vue-router@4

2. **Create a Router Instance:** In a new file (e.g., `router/index.js`), import and create a router:
```javascript
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

Key Concepts

Router View: Use <router-view> in your app to display the matched component for the current route.
Router Link: Use <router-link> for navigation instead of <a> tags to prevent page reloads.
Dynamic Routes: Create paths with parameters, like /user/:id, to build dynamic pages.
Nested Routes: Create complex layouts with nested routes and multiple <router-view> components.

With these basics, you're ready to create robust, navigable Vue applications. Happy routing!

2. Update BlogPost.vue to load and render Markdown content:

<ANTARTIFACTLINK identifier="blog-post-component" type="application/vnd.ant.code" language="vue" title="Updated BlogPost.vue" isClosed="true" />

3. Update `blogPosts.json` to include the Markdown file names:

<ANTARTIFACTLINK identifier="blog-posts-json" type="application/vnd.ant.code" language="json" title="Updated blogPosts.json" isClosed="true" />

4. Install the `marked` library to render Markdown:

npm install marked

This approach keeps your existing structure while allowing for easier content management using Markdown files. The BlogPost component now acts as a wrapper, loading and rendering the appropriate Markdown content for each post.