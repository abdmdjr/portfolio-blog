<template>
  <div>
    <h1 class="font-title font-bold relative text-2xl md:text-3xl mt-12">
      Experience<span
        class="iconblog w-8 h-8 md:w-8 md:h-10 bottom-1/4 ml-3"
      ></span>
    </h1>
    <div class="list mt-8">
      <ul>
        <li class="xl:flex xl:flex-row mb-12">
          <div
            class="list flex justify-between xl:self-center xl:mb-0 xl:flex-col mb-4"
          >
            <div class="location font-dosis font-medium block w-20">
              En poste
            </div>
            <div class="date text-gray-700 text-xs">Févr 21</div>
          </div>
          <div class="flex xl:w-192 xl:ml-10 justify-start items-center">
            <img
              class="h-18 xl:h-24"
              src="~assets/img/logointeract.jpeg"
              alt="logo Compar'Or"
            />
            <p
              class="self-center xl:min-w-maxcontent font-dosis ml-5 xl:ml-10 sm:text-xl"
            >
              Développeur frontend -
              <span class="block xl:block sm:inline font-bold text-blue-600"
                ><a
                  href="https://interact.lu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="link_Interact"
                >
                  Interact S.A.</a
                ></span
              >
            </p>
          </div>
          <p
            class="font-dosis xl:w-150 text-gray-700 sm:text-xl mt-4 xl:mt-0 xl:pl-36"
          >
            J'ai integré une équipe de développeurs PHP (Symfony) chez Interact.
            Mon objectif principal est de créer des interfaces utilisateurs
            performantes et ergonomiques en utilisant les APIs mises à
            disposition par mes collègues: admin dashboard, formulaires
            multi-étapes, création d'une galerie média, représentation graphique
            de données, etc.
          </p>
        </li>
        <li class="xl:flex xl:flex-row mb-12">
          <div
            class="list flex justify-between xl:self-center xl:mb-0 xl:flex-col mb-4"
          >
            <div class="location font-dosis font-medium">Indépendant</div>
            <div class="date text-gray-700 text-xs">Aout'20-Nov'20</div>
          </div>
          <div class="flex xl:w-192 xl:ml-10 justify-start items-center">
            <img
              class="h-18 xl:h-24"
              src="~assets/img/logocompar.png"
              alt="logo Compar'Or"
            />
            <p
              class="self-center xl:min-w-maxcontent font-dosis ml-5 xl:ml-10 sm:text-xl"
            >
              Développeur fullstack -
              <span class="block xl:block sm:inline font-bold text-blue-600"
                ><a
                  href="https://compar-or.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="link_conceptFactory"
                >
                  Compar'Or</a
                ></span
              >
            </p>
          </div>
          <p
            class="font-dosis xl:w-150 text-gray-700 sm:text-xl mt-4 xl:mt-0 xl:pl-36"
          >
            Dans le cadre de mon projet perso, j'ai développé une web app qui
            permet de trouver le meilleur prix des pièces d’or les plus
            convoitées par les investisseurs via mon API ! Les technos utilisées
            : NuxtJS, NodeJS, MongoDB, et la librairie Puppeteer pour le
            webscraping (la récupération des prix sur les sites comparés)
          </p>
        </li>
        <li class="xl:flex xl:flex-row">
          <div
            class="list flex justify-between xl:self-center xl:mb-0 xl:flex-col mb-4"
          >
            <div class="location font-dosis font-medium">Luxembourg</div>
            <div class="date text-gray-700 text-xs">Oct'19-Janv'20</div>
          </div>
          <div class="flex xl:w-192 xl:ml-10 justify-start items-center">
            <img
              class="h-18 xl:h-24"
              src="~assets/img/logoconcept.png"
              alt="logo Concept Factory"
            />
            <p
              class="self-center xl:min-w-maxcontent font-dosis ml-5 xl:ml-10 sm:text-xl"
            >
              Développeur frontend -
              <span class="block xl:block sm:inline font-bold text-blue-600"
                ><a
                  href="https://www.conceptfactory.lu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="link_conceptFactory"
                >
                  Concept Factory</a
                ></span
              >
            </p>
          </div>
          <p
            class="font-dosis xl:w-150 text-gray-700 sm:text-xl mt-4 xl:mt-0 xl:pl-36"
          >
            J'ai travaillé deux mois avec l'équipe front-end et deux mois avec
            l'équipe back-end. En plus d'avoir approndi la technique, le fait
            d'être au coeur de projets clients et de s'organiser en équipe est
            très formateur. Super team au passage !
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
  background-image: url('~assets/img/iconexperience.svg');
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
