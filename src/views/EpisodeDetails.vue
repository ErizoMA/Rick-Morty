<template>
  <div v-if="details" class="container">
    <p class="title">{{ details.name }}</p>
    <div class="info">
      <div class="info__episode">
        <p class="info__title">Episode</p>
        <p class="info__subtitle">{{ details.episode }}</p>
      </div>
      <div class="info__date">
        <p class="info__title">Date</p>
        <p class="info__subtitle">{{ details.air_date }}</p>
      </div>
    </div>
    <p class="subtitle">Cast</p>
    <CardsContainer v-if="details" :residents="details.characters" />
    <img
      class="back-img"
      src="../assets/goBack.svg"
      alt="back"
      @click="goBack"
    />
  </div>
</template>

<script>
import { APISettings } from "../api/config";
import getDetails from "../composables/getDetails";
import CardsContainer from "../components/CardsContainer.vue";
import { useRouter } from "vue-router";

export default {
  props: ["id"],
  components: { CardsContainer },
  setup(props) {
    const router = useRouter();
    const goBack = () => {
      router.go(-1);
    };
    const { episodesUrl } = APISettings;
    const { details, fetchData } = getDetails(props, episodesUrl);
    fetchData();
    return { details, goBack };
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
.back-img {
  position: absolute;
  left: 209px;
  top: 102px;
  cursor: pointer;
}
</style>
