<template>
  <div class="container">
    <img src="../assets/episodesLogo.svg" alt="logo-episode" class="logo" />
    <h1>Filters component</h1>
    <div class="cards-container">
      <EpisodeCard
        v-for="episode in results"
        :key="episode.id"
        :episode="episode"
      />
    </div>
    <button @click="loadMore" class="more-button">load more</button>
  </div>
</template>

<script>
import EpisodeCard from "../components/EpisodeCard.vue";
import getData from "../composables/getData";
import { APISettings } from "../api/config";
export default {
  components: { EpisodeCard },
  setup() {
    const { episodesUrl } = APISettings;
    const { results, info, fetchData, loadMore } = getData(episodesUrl);
    fetchData();
    return { results, info, loadMore };
  },
};
</script>

<style></style>
