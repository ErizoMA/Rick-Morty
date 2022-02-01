<template>
  <div class="container">
    <img src="../assets/logo-location.png" alt="logo-location" class="logo" />
    <h1>Filters component</h1>
    <div class="cards-container">
      <LocationCard
        v-for="location in results"
        :key="location.id"
        :location="location"
      />
    </div>
    <button @click="loadMore" class="more-button">load more</button>
  </div>
</template>

<script>
import LocationCard from "../components/LocationCard.vue";
import getData from "../composables/getData";
import { APISettings } from "../api/config";
export default {
  components: { LocationCard },
  setup() {
    const { locationsUrl } = APISettings;
    const { results, info, fetchData, loadMore } = getData(locationsUrl);
    fetchData();
    return { results, info, loadMore };
  },
};
</script>

<style></style>
