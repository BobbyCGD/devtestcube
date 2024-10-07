<template>
  <div id="app" class="min-h-screen bg-gray-100">
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <h1 class="text-4xl font-bold text-gray-900 flex items-center">
          <span>DevTest</span><span class="text-blue-600">Cube</span>
        </h1>
        <nav>
          <router-link to="/" class="text-gray-700 hover:text-blue-600 px-3 py-2">Home</router-link>
          <router-link to="/about" class="text-gray-700 hover:text-blue-600 px-3 py-2">About</router-link>
        </nav>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Global styles can go here */
</style>