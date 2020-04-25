<template>
  <section class="hero bg-gray-400">
    <div class="hero-content">
      <div class="lg:relative lg:pb-0 pb-8 ">
        <img
          class="lg:relative lg:left-5 w-48 mx-auto lg:w-96"
          src="~assets/img/hero-profil.png"
          alt
        />
        <div
          class="lg:absolute lg:top-2/5 lg:right-60 xl:right-55 h-20 w-72 lg:h-32 lg:w-96 bg-gray-200 flex items-center p-6 text-justify mx-auto shadow-xl"
        >
          <h3
            class="icon flex font-body self-center text-sm lg:text-xl font-medium"
          >
            Hi! I'm Abdelrhany Medjaheri,<br />
            Junior Front-end Developer<a
              href="https://drive.google.com/file/d/1QYC_viSKucLjsbD4aymXijeR8ybp6aZK/view?usp=sharing"
              target="_blank"
              ><span class="iconhero w-12 h-12 left-108 lg:w-12 lg:h-12"></span
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
.icon {
  position: relative;
}
.iconhero {
  content: '';
  position: absolute;
  top: 4%;
  background-image: url('~assets/img/iconherocv.svg');
  background-repeat: no-repeat;
}
</style>
