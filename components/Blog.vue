<template>
  <div>
    <h1 class="relative font-bold text-2xl md:text-3xl">
      Blog<span class="iconblog w-6 h-6 md:w-8 md:h-8 top-22 ml-3 "></span>
    </h1>
    <ul class="sm:grid sm:grid-cols-2 gap-10">
      <li v-for="blogPost in blogPosts" :key="blogPost" class="mt-8">
        <img :src="blogPost.img" alt="article image" />
        <h1 class="text-2xl font-bold mt-1 mb-1">{{ blogPost.title }}</h1>
        <p class="text-gray-700 sm:text-xl">
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
.iconblog {
  content: '';
  position: absolute;
  background-image: url('~assets/img/iconblog3.svg');
  background-repeat: no-repeat;
}
</style>
