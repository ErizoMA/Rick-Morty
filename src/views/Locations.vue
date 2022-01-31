<template>
  <div class="container">
    <img src="../assets/logo-location.png" alt="logo-location" class="logo" />
    <h1>Filters component</h1>
    <div class="cards-container">
      <div v-for="location in results" class="card" :key="location.id">
        <div class="card__info">
          <p class="name">{{ location.name }}</p>
          <p class="type">{{ location.type }}</p>
        </div>
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
    const { locationsUrl } = APISettings;
    const { results, info, fetchData, loadMore } = getData(locationsUrl);
    fetchData();
    return { results, info, loadMore };
  },
};
</script>

<style></style>
