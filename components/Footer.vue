<template>
  <div class="relative">
    <div class="footer flex h-42 bg-dark-blue mt-18">
      <div
        class="container flex flex-col justify-center mx-auto px-6 py-6 font-dosis text-gray-200"
      >
        <p class="text-center">
          N’hésitez pas à me donner votre avis sur mon portfolio, à me contacter
          pour un job, ou simplement à dire bonjour!
        </p>
        <!-- <span class="iconblog w-10 h-10 md:w-8 md:h-8 mx-auto"></span> -->
        <div class="social flex justify-center m-5">
          <a
            class="transition duration-100 ease-in transform lg:hover:scale-125"
            href="https://github.com/abdmdjr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link_github"
            ><img src="~assets/img/github.svg" class="w-6 m-5" alt="github_icon"
          /></a>
          <a
            class="transition duration-100 ease-in transform lg:hover:scale-125"
            href="https://www.linkedin.com/in/abdmdjr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link_linkedin"
            ><img
              src="~assets/img/linkedin.svg"
              class="w-6 m-5"
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
              class="w-6 m-5"
              alt="twitter_icon"
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

ol,
ul {
  list-style: none;
  margin: 0;
  padding-left: 0px;
}

p {
  margin: 0;
}
</style>
