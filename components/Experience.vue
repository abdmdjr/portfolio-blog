<template>
  <div>
    <h1 class="font-title font-bold relative text-2xl md:text-3xl mt-12">
      Experience<span
        class="iconblog w-8 h-8 md:w-8 md:h-10 bottom-1/4 ml-3"
      ></span>
    </h1>
    <div class="list mt-8">
      <ul>
        <li class="xl:flex xl:flex-row">
          <div
            class="list flex justify-between xl:self-center xl:mb-0 xl:self-start xl:flex-col mb-4"
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
              Développeur front-end -
              <span class="block xl:block sm:inline font-bold text-blue-600"
                ><a
                  href="https://www.conceptfactory.lu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Concept Factory</a
                ></span
              >
            </p>
          </div>
          <p class="font-dosis text-gray-700 sm:text-xl mt-4 xl:mt-0 xl:pl-36">
            J'ai travaillé deux mois avec l'équipe front-end et deux mois avec
            l'équipe back-end. Ce stage s'est agréablement bien deroulé, j'ai
            énormement appris (voir CV). En plus d'avoir approndi la technique,
            le fait d'être au coeur de projets clients et de s'organiser en
            équipe est très formateur. Super team au passage !
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
