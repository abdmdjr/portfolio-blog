<template>
  <div>
    <h1 class="font-title font-bold relative text-2xl md:text-3xl mt-12">
      A propos de moi<span
        class="iconblog w-6 h-6 md:w-8 md:h-8 top-22 ml-3"
      ></span>
    </h1>
    <p class="font-dosis text-gray-700 sm:text-xl mt-8">
      Salut c’est Abdel ! Déjà passionné par le design depuis mon adolescence,
      je me suis tourné vers une reconversion dans le développement web, après
      avoir exercé 3 ans dans le domaine du commerce. J’ai obtenu un diplôme de
      développeur équivalent à un BAC+2 en informatique mi-janvier 2020, et je
      suis maintenant développeur front-end chez Interact !
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
