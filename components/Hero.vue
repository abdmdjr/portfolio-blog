<template>
  <section class="hero bg-dark-blue">
    <div class="hero-content">
      <div class="lg:relative lg:pb-0 pb-8">
        <img
          class="lg:relative lg:left-5 w-48 mx-auto lg:w-96"
          src="~assets/img/maybe4.png"
          alt
        />
        <div
          class="content lg:absolute lg:top-35 lg:right-60 xl:right-57 h-20 xl:h-32 xl:w-96 bg-gray-200 flex items-center p-6 text-justify mx-auto rounded-md shadow-lg"
        >
          <h3
            class="relative flex self-center font-dosis text-md xl:text-2xl font-medium"
          >
            Salut à tous ! Je m'appelle Abdel,
            <br />Je suis développeur Front-End Junior
            <a
              href="https://drive.google.com/file/d/1QYC_viSKucLjsbD4aymXijeR8ybp6aZK/view?usp=sharing"
              target="_blank"
              aria-label="resume Abdel"
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

.content {
  width: max-content;
}
</style>
