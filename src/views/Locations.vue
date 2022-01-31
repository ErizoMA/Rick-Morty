<template>
  <img src="../assets/logo-location.png" alt="logo-location" class="logo" />
  <h1>Filters component</h1>
  <div class="cards-container">
    <div v-for="location in locations" class="card" :key="location.id">
      <div class="card__info">
        <p class="name">{{ location.name }}</p>
        <p class="type">{{ location.type }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let locations = ref([]);
    const url = "https://rickandmortyapi.com/api/location";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw Error("Sorry, this page is not available");
        const data = await response.json();
        locations.value = data.results;
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();

    return { locations };
  },
};
</script>

<style></style>
