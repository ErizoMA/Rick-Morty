<template>
  <div class="container">
    <img src="../assets/logo-episode.png" alt="logo-episode" class="logo" />
    <h1>Filters component</h1>
    <div class="cards-container">
      <div v-for="episode in results" class="card" :key="episode.id">
        <router-link
          :to="{ name: 'Episode Details', params: { id: episode.id } }"
        >
          <div class="card__info">
            <p class="name">{{ episode.name }}</p>
            <p class="type">{{ episode.air_date }}</p>
            <p class="type">{{ episode.episode }}</p>
          </div>
        </router-link>
      </div>
    </div>
    <button @click="loadMore" class="more-button">load more</button>
  </div>
</template>

<script>
import getData from "../composables/getData";
import { APISettings } from "../api/config";
export default {
  setup() {
    const { episodesUrl } = APISettings;
    const { results, info, fetchData, loadMore } = getData(episodesUrl);
    fetchData();
    return { results, info, loadMore };
  },
};
</script>

<style></style>
