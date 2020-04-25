<template>
  <section class="hero bg-dark-blue">
    <div class="hero-content">
      <div class="image-placeholder pb-8">
        <img
          class="hero-profil w-48 mx-auto"
          src="~assets/img/hero-profil.png"
          alt
        />
        <div
          class="hero-text bg-gray-200 flex items-center p-6 text-justify mx-auto h-20 w-72 shadow-md"
        >
          <h3 class="icon flex font-body self-center text-sm font-medium">
            Hi! I'm Abdelrhany Medjaheri,<br />
            Junior Front-end Developer<a
              href="https://drive.google.com/file/d/1QYC_viSKucLjsbD4aymXijeR8ybp6aZK/view?usp=sharing"
              target="_blank"
              ><span class="iconhero"></span
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
  height: 38px;
  width: 38px;
  left: 110%;
  top: 4%;
  background-image: url('~assets/img/iconherocv.svg');
  background-repeat: no-repeat;
}
</style>
