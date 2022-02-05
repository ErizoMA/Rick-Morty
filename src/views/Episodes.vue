<template>
  <div class="container">
    <img src="../assets/episodesLogo.svg" alt="logo-episode" class="logo" />
    <SearchBar :query="query" />
    <div class="cards-container">
      <EpisodeCard
        v-for="episode in results"
        :key="episode.id"
        :episode="episode"
      />
    </div>
    <div v-if="results.length === 0" class="not-found">
      Sorry, we couldn't find any results
    </div>

    <button @click="loadMore" class="more-button">load more</button>
  </div>
</template>

<script>
import { APISettings } from "../api/config";
import EpisodeCard from "../components/EpisodeCard.vue";
import SearchBar from "../components/SearchBar.vue";
import getData from "../composables/getData";
import getFilterResults from "../composables/getFilterResults";
import { watchEffect } from "vue";
export default {
  components: { EpisodeCard, SearchBar },
  setup() {
    const { episodesUrl } = APISettings;
    const { results, info, fetchData, loadMore } = getData(episodesUrl);
    const { fetchQuery, query } = getFilterResults(episodesUrl, results, info);
    fetchData();
    watchEffect(fetchQuery);
    return { results, info, loadMore, query };
  },
};
</script>
