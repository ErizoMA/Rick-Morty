<template>
  <div id="nav">
    <img src="./assets/logo-black.png" alt="logo" />
    <div class="navbar">
      <router-link to="/">Characters</router-link>
      <router-link to="/locations">Locations</router-link>
      <router-link to="/episodes">Episodes</router-link>
    </div>
  </div>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Karla:wght@700&display=swap");
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a {
  text-decoration: inherit;
  color: inherit;
}

#nav {
  display: flex;
  max-width: 1020px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 6px 0 6px 0;
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
.navbar {
  display: flex;
  align-items: center;
  gap: 24px;
}
</style>
