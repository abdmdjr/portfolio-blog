<template>
  <div class="">
    <div class="footer flex h-42 bg-dark-blue mt-18">
      <div
        class="container flex flex-col justify-center mx-auto px-6 py-6 font-dosis text-gray-200"
      >
        <p class="text-center">
          N’hésitez pas à me donner votre avis sur mon portfolio, ou simplement
          à dire bonjour !
        </p>
        <!-- <span class="iconblog w-10 h-10 md:w-8 md:h-8 mx-auto"></span> -->
        <div class="social flex justify-center m-5">
          <a href="https://github.com/abdmdjr" target="_blank"
            ><img src="~assets/img/github.svg" class="w-6 m-5"
          /></a>
          <a href="https://www.linkedin.com/in/abdmdjr" target="_blank"
            ><img src="~assets/img/linkedin.svg" class="w-6 m-5"
          /></a>
          <a href="https://twitter.com/abdmdjr" target="_blank"
            ><img src="~assets/img/twitter.svg" class="w-6 m-5"
          /></a>
        </div>
        <p class="text-center mx-auto text-xs">
          © 2020 — coded by Abdelrhany Medjaheri with NuxtJs
        </p>
      </div>
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
