<template>
  <div class="container">
    <img src="../assets/locationLogo.svg" alt="logo-location" class="logo" />
    <SearchBar :query="query" />
    <div class="cards-container">
      <LocationCard
        v-for="location in results"
        :key="location.id"
        :location="location"
      />
    </div>
    <div v-if="error" class="not-found">
      Sorry, we couldn't find any results
    </div>

    <button @click="loadMore" class="more-button">load more</button>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import LocationCard from "../components/LocationCard.vue";
import getData from "../composables/getData";
import { APISettings } from "../api/config";
import { watchEffect } from "vue";
import getFilterResults from "../composables/getFilterResults";

export default {
  components: { LocationCard, SearchBar },
  setup() {
    const { locationsUrl } = APISettings;
    const { results, info, fetchData, loadMore } = getData(locationsUrl);
    const { fetchQuery, query, error } = getFilterResults(
      locationsUrl,
      results,
      info
    );

    fetchData();
    watchEffect(fetchQuery);
    return { results, info, loadMore, query, error };
  },
};
</script>
