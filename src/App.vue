<template>
  <NavBar />
  <router-view />
  <Footer />
</template>
<script>
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";

export default {
  components: { Footer, NavBar },
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
.not-found {
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  align-items: center;
  color: rgba(0, 0, 0, 0.87);
}
.logo {
  height: 200px;
  width: auto;
}
.container {
  max-width: 1020px;
  margin: 26px auto 0;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.cards-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  row-gap: 24px;
}

.more-button {
  background: #f2f9fe;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12),
    0px 6px 10px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  padding: 10px 32px;
  color: #2196f3;
  font-weight: bold;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 1px;
  margin: 30px auto;
}
</style>
