<template>
  <img src="../assets/logo-episode.png" alt="logo-episode" class="logo" />
  <h1>Filters component</h1>
  <div class="cards-container">
    <div v-for="episode in episodes" class="card" :key="episode.id">
      <div class="card__info">
        <p class="name">{{ episode.name }}</p>
        <p class="type">{{ episode.air_date }}</p>
        <p class="type">{{ episode.episode }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let episodes = ref([]);
    const url = "https://rickandmortyapi.com/api/episode";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw Error("Sorry, this page is not available");
        const data = await response.json();
        episodes.value = data.results;
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();

    return { episodes };
  },
};
</script>

<style></style>
