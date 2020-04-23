<template>
  <div class="layout">
    <NavigationBar />
    <Hero />
    <Blog />
  </div>
</template>

<script>
import NavigationBar from '~/components/NavigationBar.vue'
import Hero from '~/components/Hero.vue'
import Blog from '~/components/Blog.vue'

export default {
  components: {
    NavigationBar,
    Hero,
    Blog
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
</script>

<style></style>
