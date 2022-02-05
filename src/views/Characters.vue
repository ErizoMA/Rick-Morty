<template>
  <div class="container">
    <img src="../assets/characterLogo.svg" alt="logo-character" class="logo" />
    <CharacterSearchBar :query="query" />
    <div class="cards-container">
      <CharacterCard
        v-for="character in results"
        :key="character.id"
        :character="character"
      />
    </div>
    <div v-if="results.length === 0" class="not-found">
      Sorry, we couldn't find any results
    </div>
    <button @click="loadMore" class="more-button">Load More</button>
  </div>
</template>

<script>
import CharacterCard from "../components/CharacterCard.vue";
import CharacterSearchBar from "../components/CharacterSearchBar.vue";
import getData from "../composables/getData";
import { APISettings } from "../api/config";
import { watchEffect } from "vue";
import getFilterResults from "../composables/getFilterResults";
export default {
  components: { CharacterCard, CharacterSearchBar },
  setup() {
    const { charactersUrl } = APISettings;
    const { results, info, fetchData, loadMore } = getData(charactersUrl);
    const { fetchQuery, query } = getFilterResults(
      charactersUrl,
      results,
      info
    );
    fetchData();
    watchEffect(fetchQuery);
    return { results, info, loadMore, query };
  },
};
</script>
