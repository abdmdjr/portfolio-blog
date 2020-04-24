<template>
  <div class="container w-auto mx-auto p-4 md:p-16">
    <h1 class="font-bold text-xl mb-3">Blog</h1>
    <ul class="sm:grid sm:grid-cols-2 gap-10">
      <li v-for="blogPost in blogPosts" :key="blogPost" class="mb-10">
        <img :src="blogPost.img" alt="article image" />
        <h1 class="text-xl font-bold mt-1 mb-1">{{ blogPost.title }}</h1>
        <p class="text-gray-700 text-sm">
          {{ blogPost.description }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts
    }
  }
}
</script>

<style scoped>
h1 {
  font-family: 'Quicksand', sans-serif;
}

p {
  font-family: 'Dosis', sans-serif;
}
</style>
