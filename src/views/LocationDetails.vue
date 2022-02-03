<template>
  <div v-if="details" class="container">
    <p class="title">{{ details.name }}</p>
    <div class="info">
      <div>
        <p class="info__title">Type</p>
        <p class="info__subtitle">{{ details.type }}</p>
      </div>
      <div>
        <p class="info__title">Dimension</p>
        <p class="info__subtitle">{{ details.dimension }}</p>
      </div>
    </div>
    <p class="subtitle">Residents</p>
    <CardsContainer v-if="details" :residents="details.residents" />
  </div>
</template>

<script>
import { APISettings } from "../api/config";
import getDetails from "../composables/getDetails";
import CardsContainer from "../components/CardsContainer.vue";
export default {
  props: ["id"],
  components: { CardsContainer },
  setup(props) {
    const { locationsUrl } = APISettings;
    const { details, fetchData } = getDetails(props, locationsUrl);
    fetchData();
    return { details };
  },
};
</script>

<style scoped>
.title {
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: #081f32;
  margin: 30px 0 20px 0;
}
.info {
  display: flex;
  gap: 224px;
  width: fit-content;
  margin: 0 auto;
}
.info__title {
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #081f32;
}
.info__subtitle {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #6e798c;
}

.subtitle {
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #8e8e93;
  text-align: left;
  margin-bottom: 24px;
}
.cards-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  row-gap: 24px;
}
</style>
