<template>
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-4xl font-bold mb-8 flex items-center">
            <span class="text-gray-800">DevTest</span><span class="text-blue-600">Cube</span>
        </h1>
      
      <div class="mb-6">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search blog posts..."
          class="w-full px-4 py-2 border rounded-lg"
          @input="searchPosts"
        />
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="post in filteredPosts"
          :key="post.id"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img :src="post.image" :alt="post.title" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
            <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>
            <a
              :href="'/post/' + post.id"
              class="text-blue-500 hover:underline"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue'
  import blogPostsData from '@/assets/blogPosts.json'
  
  export default {
    name: 'BlogFrontPage',
    setup() {
      const posts = ref(blogPostsData)
  
      const searchQuery = ref('')
  
      const filteredPosts = computed(() => {
        if (!searchQuery.value) return posts.value
        const query = searchQuery.value.toLowerCase()
        return posts.value.filter(post => 
          post.title.toLowerCase().includes(query) || 
          post.excerpt.toLowerCase().includes(query)
        )
      })
  
      const searchPosts = () => {
        // You can add additional logic here if needed
      }
  
      return {
        posts,
        searchQuery,
        filteredPosts,
        searchPosts,
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add any component-specific styles here if needed */
  </style>