<template>
  <div class="header">
    <div class="container flex justify-between px-6 sm:px-16">
      <a class="logo font-dosis" href="#">abdmdjr.</a>
      <div class="social w-18 flex items-center justify-between">
        <a href="https://github.com/abdmdjr" target="_blank"
          ><img src="~assets/img/github.svg" class="w-4 "
        /></a>
        <a href="https://www.linkedin.com/in/abdmdjr" target="_blank"
          ><img src="~assets/img/linkedin.svg" class="w-4"
        /></a>
        <a href="https://twitter.com/abdmdjr" target="_blank"
          ><img src="~assets/img/twitter.svg" class="w-4 "
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBurger: false
    }
  }
}
</script>
<style scoped>
.header {
  display: flex;
  width: 100%;
  height: 4.4rem;
  justify-content: center;
  align-items: center;
  background-color: #1f1d24;
}

.logo {
  font-size: 24px;
  font-weight: 600;
  color: #f2f6fc;
  text-decoration: none;
}

.hamburger {
  height: 22px;
  padding: 0;
}

.hamburger-box {
  width: 30px;
}

.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: 30px;
  height: 1.5px;
  margin-bottom: 0.25rem;
  background-color: #f2f6fc;
  border-radius: 20px;
}

.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  background-color: #f2f6fc;
}
</style>
