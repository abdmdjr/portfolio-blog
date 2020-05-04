<template>
  <div>
    <h1 class="font-title font-bold relative text-2xl md:text-3xl">
      Blog<span class="iconblog w-6 h-6 md:w-8 md:h-8 top-22 ml-3 "></span>
    </h1>
    <ul class="sm:grid sm:grid-cols-2 gap-10">
      <li v-for="blogPost in blogPosts" :key="blogPost.blog" class="mt-8">
        <nuxt-link :to="'/' + blogPost.slug">
          <v-lazy-image :src="blogPost.img" alt="article image"></v-lazy-image>
          <h1 class="font-title font-bold text-2xl mt-3 mb-3">
            {{ blogPost.title }}
          </h1>
          <div class="font-dosis font-medium text-gray-700 sm:text-xl">
            {{ blogPost.description }}
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import VLazyImage from 'v-lazy-image'
export default {
  components: {
    VLazyImage
  },
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

ol,
ul {
  list-style: none;
  margin: 0;
  padding-left: 0px;
}
</style>
