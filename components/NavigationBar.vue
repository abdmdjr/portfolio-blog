<template>
  <header class="el-header">
    <a class="logo" href="#">abdmdjr.</a>
    <button
      class="hamburger hamburger--spring"
      :class="{ 'is-active': showBurger }"
      type="button"
      @click="showBurger = !showBurger"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  </header>
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
.el-header {
  display: flex;
  width: 100%;
  height: 4.4rem;
  padding: 0 30px;
  justify-content: space-between;
  align-items: center;
  background-color: #1f1d24;
}

.logo {
  font-family: 'Dosis', sans-serif;
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
