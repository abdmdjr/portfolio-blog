<template>
  <div>
    <h1 class="font-title font-bold relative text-2xl md:text-3xl mt-12">
      A propos de moi<span
        class="iconblog w-6 h-6 md:w-8 md:h-8 top-22 ml-3"
      ></span>
    </h1>
    <p class="font-dosis text-gray-700 sm:text-xl mt-8">
      Salut c’est Abdel! Déjà passionné par le design depuis mon adolescence, je
      me suis tourné logiquement vers une reconversion dans le développement
      web, après avoir exercé 3 ans dans le domaine du commerce. J’ai obtenu un
      diplôme de développeur équivalent à un BAC+2 en informatique mi-janvier
      2020, et je suis maintenant développeur front-end junior. Mon objectif est
      de designer des interfaces intuitives et de les créer en suivant les «best
      practices» pour y parvenir. En effet, la qualité du code est importante à
      mes yeux et j’y fait doublement attention => s’imprégner des meilleurs
      pratiques est une bonne manière d’avancer sereinement. J’ai crée ce
      portfolio - blog pour me présenter, et aussi pour m’entrainer (NuxtJS +
      NetlifyCMS). Je publierai un nouveau prochainement !
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
