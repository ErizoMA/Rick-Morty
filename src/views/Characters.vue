<template>
  <div class="container">
    <img src="../assets/logo-character.png" alt="logo-character" class="logo" />
    <h1>Filters component</h1>
    <div class="cards-container">
      <CharacterCard
        v-for="character in results"
        :key="character.id"
        :character="character"
      />
    </div>
    <button @click="loadMore" class="more-button">load More</button>
  </div>
</template>

<script>
import CharacterCard from "../components/CharacterCard.vue";
import getData from "../composables/getData";
import { APISettings } from "../api/config";
export default {
  components: { CharacterCard },
  setup() {
    const { charactersUrl } = APISettings;
    const { results, info, fetchData, loadMore } = getData(charactersUrl);
    fetchData();
    return { results, info, loadMore };
  },
};
</script>

<style>
.logo {
  height: 200px;
}
.container {
  max-width: 1020px;
  margin: 0 auto;
}
.cards-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  row-gap: 24px;
}

.more-button {
  background: #f2f9fe;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 18px rgba(0, 0, 0, 0.12),
    0px 6px 10px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  padding: 10px 32px;
  color: #2196f3;
  font-weight: bold;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 1px;
}
</style>
