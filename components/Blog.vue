<template>
  <div class="container w-auto mx-auto px-6 sm:px-16 mt-8">
    <h1 class="icon font-bold text-3xl">Blog</h1>
    <ul class="sm:grid sm:grid-cols-2 gap-10">
      <li v-for="blogPost in blogPosts" :key="blogPost" class="mt-10">
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
h1 {
  font-family: 'Quicksand', sans-serif;
}

p {
  font-family: 'Dosis', sans-serif;
}

.icon {
  position: relative;
}
.icon:after {
  content: '';
  position: absolute;
  height: 38px;
  width: 38px;
  top: 10%;
  margin-left: 16px;
  background-image: url('~assets/img/iconblog3.svg');
}
</style>
