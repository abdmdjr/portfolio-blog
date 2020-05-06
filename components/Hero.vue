<template>
  <section class="hero bg-dark-blue">
    <div class="hero-content">
      <div class="lg:relative lg:pb-0 pb-8 ">
        <img
          class="lg:relative lg:left-5 w-48 mx-auto lg:w-96"
          src="~assets/img/hero-profil.png"
          alt
        />
        <div
          class="lg:absolute lg:top-35 lg:right-60 xl:right-57 h-20 w-72 xl:h-32 xl:w-96 bg-gray-200 flex items-center p-6 text-justify mx-auto rounded-md shadow-lg"
        >
          <h3
            class="relative flex self-center font-dosis text-md xl:text-2xl font-medium"
          >
            Hi! I'm Abdelrhany Medjaheri,<br />
            Junior Front-end Developer<a
              href="https://drive.google.com/file/d/1QYC_viSKucLjsbD4aymXijeR8ybp6aZK/view?usp=sharing"
              target="_blank"
              ><span
                title="Curriculum Vitae"
                class="iconhero w-10 h-10 top-10 left-110 xl:left-106 xl:top-10 xl:w-14 xl:h-14 transition duration-100 ease-in transform lg:hover:scale-125"
              ></span
            ></a>
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>
<style scoped>
.iconhero {
  content: '';
  position: absolute;
  background-image: url('~assets/img/iconherocv2.svg');
  background-repeat: no-repeat;
}
</style>
