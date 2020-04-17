<template>
  <div class="layout">
    <NavigationBar />
    <Hero />
  </div>
</template>

<script>
import NavigationBar from '~/components/NavigationBar.vue'
import Hero from '~/components/Hero.vue'

export default {
  components: {
    NavigationBar,
    Hero
  }
}
</script>

<style></style>
