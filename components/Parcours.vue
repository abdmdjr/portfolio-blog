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
            class="list flex justify-between xl:self-center xl:mb-0 xl:self-start xl:flex-col xl:mr-8 mb-4"
          >
            <div class="location font-dosis font-medium">Partout</div>
            <div class="date text-gray-700 text-xs">Chaque jour</div>
          </div>
          <div class="flex xl:w-192 xl:ml-10 justify-start">
            <img
              class="h-18 xl:h-24"
              src="~assets/img/abdelcircle.png"
              alt="Abdelrhany Medjaheri"
            />
            <p
              class="self-center xl:min-w-maxcontent font-dosis ml-5 xl:ml-10 sm:text-xl"
            >
              Self-learner -
              <span class="block xl:block sm:inline font-bold text-blue-600"
                >Concept Factory</span
              >
            </p>
          </div>
          <p class="font-dosis sm:text-xl mt-4 xl:mt-0 xl:pl-28">
            I’m working for Apple as a frontend developer self-employed
            contractor to improve the visual part of their websites. I work for
            Cupertino, California remotely from Barcelona. At the moment I’m
            learning #CleanCode #DeepJSKnowledge
          </p>
        </li>
        <li class="xl:flex xl:flex-row">
          <div
            class="list flex justify-between xl:self-center xl:flex-col xl:mr-8 xl:mb-0 mb-4"
          >
            <div class="location font-dosis font-medium">Nancy</div>
            <div class="date text-gray-700 text-xs">Avr'19-Janv'20</div>
          </div>
          <div class="flex xl:w-192 xl:ml-10 justify-start self-center">
            <img
              class="h-18 xl:h-24"
              src="~assets/img/iconschool.png"
              alt="AFPA formation web"
            />
            <p
              class="self-center text-left xl:min-w-maxcontent font-dosis ml-5 xl:ml-10 sm:text-xl"
            >
              Diplôme développeur Web
              <span class="block xl:block sm:inline font-bold text-blue-600"
                >- AFPA</span
              >
            </p>
          </div>
          <p class="font-dosis sm:text-xl mt-4 xl:mt-0 xl:pl-28">
            I’m working for Apple as a frontend developer self-employed
            contractor to improve the visual part of their websites. I work for
            Cupertino, California remotely from Barcelona. At the moment I’m
            learning #CleanCode #DeepJSKnowledge
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
</style>
