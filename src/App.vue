<template>
  <div id="nav">
    <router-link to="/">
      <img src="./assets/logo-black.png" alt="logo" />
    </router-link>
    <div class="navbar">
      <router-link to="/">Characters</router-link>
      <router-link to="/locations">Locations</router-link>
      <router-link to="/episodes">Episodes</router-link>
    </div>
  </div>
  <router-view />
  <Footer />
</template>
<script>
import Footer from "./components/Footer.vue";

export default {
  components: { Footer },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Karla:wght@700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  min-height: 100vh;
  padding-bottom: 70px;
  position: relative;
}
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
.navbar {
  display: flex;
  align-items: center;
  gap: 24px;
}
</style>
