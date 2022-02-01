<template>
  <div class="container">
    <img src="../assets/logo-character.png" alt="logo-character" class="logo" />
    <h1>Filters component</h1>
    <div class="cards-container">
      <div v-for="character in results" class="card" :key="character.id">
        <router-link
          :to="{ name: 'Character Details', params: { id: character.id } }"
        >
          <img class="card__img" :src="character.image" :alt="character.name" />
          <div class="card__info">
            <p class="name">{{ character.name }}</p>
            <p class="type">{{ character.species }}</p>
          </div>
        </router-link>
      </div>
    </div>
    <button @click="loadMore" class="more-button">load More</button>
  </div>
</template>

<script>
import getData from "../composables/getData";
import { APISettings } from "../api/config";
export default {
  setup() {
    const { charactersUrl } = APISettings;
    const { results, info, fetchData, loadMore } = getData(charactersUrl);
    fetchData();
    return { results, info, loadMore };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
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
.card {
  width: 240px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
}
.card a {
  text-decoration: inherit;
  color: inherit;
}
.card__img {
  width: 100%;
  height: 168px;
  object-fit: cover;
}
.card__info {
  padding: 16px 12px;
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
