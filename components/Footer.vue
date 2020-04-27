<template>
  <div class="footer relative h-42 bg-dark-blue mt-18">
    <div class="container mx-auto px-6 pt-6 font-dosis text-gray-200">
      <p class="text-center">
        N’hésitez pas à me donner votre avis sur mon portfolio, ou simplement à
        dire bonjour !
      </p>
      <!-- <span class="iconblog w-10 h-10 md:w-8 md:h-8 mx-auto"></span> -->
      <div class="social flex justify-center m-5">
        <img src="~assets/img/github.svg" class="w-6 m-5" />
        <img src="~assets/img/linkedin.svg" class="w-6 m-5" />
        <img src="~assets/img/twitter.svg" class="w-6 m-5" />
      </div>
      <p class="text-center mx-auto text-xs absolute bottom-0">
        © 2020 — Web app designed and coded by Abdelrhany Medjaheri using +
        Nuxt.
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.iconblog {
  content: '';
  display: block;
  background-image: url('~assets/img/iconhobbies.svg');
  background-repeat: no-repeat;
}
</style>
