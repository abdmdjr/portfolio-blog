<template>
  <div>
    <h1 class="font-title font-bold relative text-2xl md:text-3xl mt-12">
      A propos de moi<span
        class="iconblog w-6 h-6 md:w-8 md:h-8 top-22 ml-3"
      ></span>
    </h1>
    <p class="font-dosis text-gray-700 sm:text-xl mt-8">
      Passionné par le design et par l'envie de croquer le web, j'ai suivi une
      formation pour réussir ma reconversion professionnelle en tant que
      développeur web. Mon objectif premier est de créer la liaison optimale
      entre l'application et l'utilisateur afin de satisfaire les besoins de ce
      dernier.
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.iconblog {
  content: '';
  position: absolute;
  background-image: url('~assets/img/iconaboutme.svg');
  background-repeat: no-repeat;
}

ol,
ul {
  list-style: none;
  margin: 0;
  padding-left: 0px;
}
</style>
