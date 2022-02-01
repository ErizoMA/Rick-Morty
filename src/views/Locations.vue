<template>
  <div class="container">
    <img src="../assets/logo-location.png" alt="logo-location" class="logo" />
    <h1>Filters component</h1>
    <div class="cards-container">
      <!-- <div v-for="location in results" class="card" :key="location.id">
        <router-link
          :to="{ name: 'Location Details', params: { id: location.id } }"
        >
          <div class="card__info">
            <p class="name">{{ location.name }}</p>
            <p class="type">{{ location.type }}</p>
          </div>
        </router-link>
      </div> -->
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
