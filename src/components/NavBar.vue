<template>
  <div id="nav">
    <router-link to="/">
      <img src="../assets/logo-black.png" alt="logo" />
    </router-link>
    <div class="navigation">
      <router-link to="/">Characters</router-link>
      <router-link to="/locations">Locations</router-link>
      <router-link to="/episodes">Episodes</router-link>
    </div>
  </div>
</template>

<style scoped>
#nav {
  display: flex;
  justify-content: space-between;
  padding: 6px 210px;
  box-shadow: -2px 0px 8px 2px rgba(0, 0, 0, 0.1);
}

#nav a {
  font-family: "Karla", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.navigation {
  display: flex;
  align-items: center;
  gap: 24px;
}
</style>
