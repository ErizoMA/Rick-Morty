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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  text-decoration: inherit;
  color: inherit;
}

#nav {
  padding: 6px 210px;
  display: flex;
  justify-content: space-between;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.navbar {
  /* background-color: red; */
  display: flex;
  align-items: center;
  gap: 24px;
}
</style>
