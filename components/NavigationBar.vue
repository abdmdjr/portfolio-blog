<template>
  <div class="header">
    <div class="container flex justify-between px-6 sm:px-16">
      <nuxt-link class="logo font-dosis" to="/">abdmdjr.</nuxt-link>
      <div class="social w-18 md:w-6s flex items-center justify-between">
        <a
          class="transition duration-100 ease-in transform lg:hover:scale-125"
          href="https://github.com/abdmdjr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link_github"
          ><img
            src="~assets/img/github.svg"
            class="w-4 md:w-6"
            alt="github_icon"
        /></a>
        <a
          class="transition duration-100 ease-in transform lg:hover:scale-125"
          href="https://www.linkedin.com/in/abdmdjr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link_linkedin"
          ><img
            src="~assets/img/linkedin.svg"
            class="w-4 md:w-6"
            alt="linkedin_icon"
        /></a>
        <a
          class="transition duration-100 ease-in transform lg:hover:scale-125"
          href="https://twitter.com/abdmdjr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link_twitter"
          ><img
            src="~assets/img/twitter.svg"
            class="w-4 md:w-6"
            alt="twitter_icon"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBurger: false
    }
  }
}
</script>
<style scoped>
.header {
  display: flex;
  width: 100%;
  height: 4.4rem;
  justify-content: center;
  align-items: center;
  background-color: #1f1d24;
}

.logo {
  font-size: 24px;
  font-weight: 600;
  color: #f2f6fc;
  text-decoration: none;
}
</style>
