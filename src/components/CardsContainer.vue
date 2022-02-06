<template>
  <Loading v-if="loading" :loading="loading" />
  <div v-else class="cards-container">
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
import Loading from "../components/Loading.vue";

export default {
  props: ["residents"],
  components: { CharacterCard, Loading },
  setup(props) {
    const { fetchArrayUrls, arrayData, loading } = getAllResults(
      props.residents
    );
    fetchArrayUrls();
    return { arrayData, loading };
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
