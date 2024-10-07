<template>
    <div v-if="post" class="container mx-auto px-4 py-8 prose lg:prose-xl">
        <nav class="text-sm mb-4">
            <router-link to="/" class="text-blue-500 hover:underline">Home</router-link>
            <span class="mx-2">/</span>
            <span class="text-gray-600">{{ post.title }}</span>
        </nav>
        <img :src="post.image" :alt="post.title" class="w-full h-64 object-cover mb-6">
        <div v-html="renderedContent"></div>
    </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import blogPosts from '@/assets/blogPosts.json'
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css' // Choose a style

export default {
    name: 'BlogPost',
    setup() {
        const route = useRoute()
        const post = ref(null)
        const content = ref('')

        onMounted(async () => {
            post.value = blogPosts.find(p => p.id === parseInt(route.params.id))
            if (post.value) {
                const response = await fetch(`/posts/${post.value.markdownFile}`)
                content.value = await response.text()
            }

            marked.setOptions({
                highlight: function (code, lang) {
                    if (lang && hljs.getLanguage(lang)) {
                        return hljs.highlight(lang, code).value
                    } else {
                        return hljs.highlightAuto(code).value
                    }
                }
            })
        })

        const renderedContent = computed(() => marked.parse(content.value))

        return { post, renderedContent }
    }
}
</script>