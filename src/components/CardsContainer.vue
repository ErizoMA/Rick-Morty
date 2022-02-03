<template>
  <div v-if="residents" class="cards-container">
    <CharacterCard
      v-for="resident in arrayData"
      :key="resident.id"
      :character="resident"
    />
  </div>
</template>

<script>
import getAllResults from "../composables/getAllResults";
import CharacterCard from "../components/CharacterCard.vue";

export default {
  props: ["residents"],
  components: { CharacterCard },
  setup(props) {
    const { fetchArrayUrls, arrayData } = getAllResults(props.residents);
    fetchArrayUrls();
    return { arrayData };
  },
};
</script>

<style scoped>
.cards-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  row-gap: 24px;
}
</style>
