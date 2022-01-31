<template>
  <img src="../assets/logo-character.png" alt="logo-character" class="logo" />
  <h1>Filters component</h1>
  <div class="cards-container">
    <div v-for="character in characters" class="card" :key="character.id">
      <img class="card__img" :src="character.image" :alt="character.name" />
      <div class="card__info">
        <p class="name">{{ character.name }}</p>
        <p class="type">{{ character.species }}</p>
      </div>
    </div>
  </div>
  <button @click="loadMore">More</button>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const defaultUrl = "https://rickandmortyapi.com/api/character";
    const characters = ref([]);
    const info = ref([]);
    const fetchData = async () => {
      try {
        const response = await fetch(defaultUrl);
        if (!response.ok) throw Error("Sorry, this page is not available");
        const data = await response.json();
        const { results, info: information } = data;
        characters.value = results;
        info.value = information;
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
    const loadMore = async () => {
      const { next: newUrl } = info.value;
      const response = await fetch(newUrl);
      const data = await response.json();
      info.value = data.info;
      characters.value = [...characters.value, ...data.results];
    };

    return { characters, info, loadMore };
  },
};
</script>

<style>
.logo {
  height: 200px;
}
.cards-container {
  max-width: 1020px;
  margin: 0 auto;
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
.card__img {
  width: 100%;
  height: 168px;
  object-fit: cover;
}
.card__info {
  padding: 16px 12px;
}
</style>
