<script>
export default {
  name: 'App'
}
</script>

<template>
  <div class="navbar" id="app">
    <div class="nav-links">
      <router-link to="/product/men" class="nav-link">Men</router-link>
      <router-link to="/product/women" class="nav-link">Women</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.nav-links {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-link {
  color: #1E1E1E;
  font-size: 20px;
  margin-right: 10px;
  align-items: center;
}

.navbar {
  background-color: #D6E6FF;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>