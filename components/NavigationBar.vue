<template>
  <header class="el-header">
    <a class="logo" href="#">abdmdjr.</a>
    <div class="burger" role="button">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
  </header>
</template>

<style scoped>
.el-header {
  display: flex;
  width: 100%;
  height: 3.4rem;
  padding: 0 30px;
  justify-content: space-between;
  align-items: center;
  background-color: #1f1d24;
}

.logo {
  font-family: 'Dosis', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: white;
  text-decoration: none;
}

.burger {
  display: flex;
  width: 27px;
  height: 33.3%;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
}

.bar {
  width: 90%;
  height: 2px;
  margin-bottom: 0.25rem;
  background-color: white;
  border-radius: 20px;
}

.bar:last-child {
  margin-bottom: 0;
}
</style>
