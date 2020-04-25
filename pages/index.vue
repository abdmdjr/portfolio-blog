<template>
  <div class="layout">
    <NavigationBar />
    <Hero />
    <div class="container w-auto mx-auto px-6 sm:px-16 mt-12">
      <Blog />
      <About />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
</script>
<script>
import NavigationBar from '~/components/NavigationBar.vue'
import Hero from '~/components/Hero.vue'
import Blog from '~/components/Blog.vue'
import About from '~/components/About.vue'

export default {
  components: {
    NavigationBar,
    Hero,
    Blog,
    About
  }
}
</script>
<style></style>
