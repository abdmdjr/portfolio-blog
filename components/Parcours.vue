<template>
  <div>
    <h1 class="font-title font-bold relative text-2xl md:text-3xl mt-12">
      Parcours<span
        class="iconblog w-8 h-8 md:w-8 md:h-8 top-15 md:top-22 ml-3"
      ></span>
    </h1>
    <div class="list mt-8 mb-8">
      <ul>
        <li class="xl:flex xl:flex-row mb-12">
          <div
            class="list flex justify-between xl:self-center xl:mb-0 xl:flex-col xl:mr-8 mb-4"
          >
            <div class="location font-dosis font-medium">Partout</div>
            <div class="date text-blue-600 text-xs">Chaque jour</div>
          </div>
          <div class="flex xl:w-192 xl:ml-10 justify-start items-center">
            <img
              class="h-18 xl:h-24"
              src="~assets/img/abdelcircle.png"
              alt="Abdelrhany Medjaheri"
            />
            <p
              class="self-center xl:min-w-maxcontent font-dosis ml-5 xl:ml-10 sm:text-xl"
            >
              Autodidacte -
              <span class="block xl:block sm:inline font-bold text-blue-600"
                ><a
                  href="https://github.com/abdmdjr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="link_github"
                  >Github</a
                ></span
              >
            </p>
          </div>
          <p
            class="font-dosis xl:w-150 text-gray-700 sm:text-xl mt-4 xl:mt-0 xl:pl-6s"
          >
            J'utilise le savoir acquis en formation et en stage pour me lancer
            des projets persos ! Je me focus actuellement sur Javascript (VueJS
            en particulier), et découvre les avantages de la JAMStack. Mon
            prochain projet sera centré autour de l'utilisation d'une API REST.
          </p>
        </li>
        <li class="xl:flex xl:flex-row">
          <div
            class="list flex justify-between xl:self-center xl:flex-col xl:mr-8 xl:mb-0 mb-4"
          >
            <div class="location font-dosis font-medium">Nancy</div>
            <div class="date text-gray-700 text-xs">Avr'19-Janv'20</div>
          </div>
          <div class="flex xl:w-192 xl:ml-12 justify-start items-center">
            <img
              class="h-18 xl:h-24"
              src="~assets/img/iconschool.png"
              alt="AFPA formation web"
            />
            <p
              class="self-center text-left xl:min-w-maxcontent font-dosis ml-5 xl:ml-10 sm:text-xl"
            >
              Formation Dev Web -
              <span class="block xl:block sm:inline font-bold text-blue-600"
                ><a
                  href="https://www.afpa.fr/formation-qualifiante/developpeur-logiciel"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="link_afpa"
                >
                  AFPA</a
                ></span
              >
            </p>
          </div>
          <p
            class="font-dosis xl:w-150 text-gray-700 sm:text-xl mt-4 xl:mt-0 xl:pl-7s"
          >
            Nous avons beaucoup appris pendant cette formation. Ce passage à
            l'AFPA m'a permis de comprendre les bases et d'approfondir le
            metier, d'apprendre à apprendre et ainsi d'être autonome. HTML5,
            CSS3, JS et PHP avec MySQL. Super promo, beaucoup de partage et de
            bonne humeur !
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.iconblog {
  content: '';
  position: absolute;
  background-image: url('~assets/img/iconparcours.svg');
  background-repeat: no-repeat;
}

.list {
  align-items: baseline;
}

ol,
ul {
  list-style: none;
  margin: 0;
  padding-left: 0px;
}
</style>
