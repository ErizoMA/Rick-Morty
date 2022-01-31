<template>
  <img src="../assets/logo-chr.png" alt="logo-characters" class="logo" />
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
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let characters = ref([]);
    const url = "https://rickandmortyapi.com/api/character";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw Error("Sorry, this page is not available");
        const data = await response.json();
        characters.value = data.results;
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();

    return { characters };
  },
};
</script>

<style scoped>
.logo {
  width: 600px;
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
