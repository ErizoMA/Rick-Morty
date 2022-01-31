<template>
  <div v-if="details" class="container">
    <img :src="details.image" :alt="details.name" class="character-img" />
    <h1>{{ details.name }}</h1>
    <div class="character-details">
      <div class="information">
        <p class="information__title">Informations</p>
        <div class="information__list">
          <div class="information__item">
            <p>Gender</p>
            <p>{{ details.gender }}</p>
          </div>
          <div class="information__item">
            <p>Status</p>
            <p>{{ details.status }}</p>
          </div>
          <div class="information__item">
            <p>Specie</p>
            <p>{{ details.species }}</p>
          </div>
          <div class="information__item">
            <p>Origin</p>
            <p>{{ details.origin.name }}</p>
          </div>
          <div class="information__item">
            <p>Type</p>
            <p>{{ details.type || "Unknown" }}</p>
          </div>
          <div class="information__item">
            <p>Location</p>
            <p>{{ details.location.name }}</p>
          </div>
        </div>
      </div>
      <div class="episodes">
        <p class="information__title">Episodes</p>
        <div class="information__list">
          <div
            v-for="episode in details.episode"
            class="information__item"
            :key="episode"
          >
            <p>{{ episode }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { APISettings } from "../api/config";
import getDetails from "../composables/getDetails";
export default {
  props: ["id"],
  setup(props) {
    const { charactersUrl } = APISettings;
    const { details, fetchData } = getDetails(props, charactersUrl);
    fetchData();
    return { details };
  },
};
</script>

<style>
.character-img {
  border-radius: 50%;
  border: 5px solid #f2f2f7;
  margin: 0 auto;
}
.character-details {
  width: 100%;
  display: flex;
}

.information {
  flex: 1;
}
.information__title {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;
  color: #8e8e93;
  margin: 0;
}
.information__list {
  display: grid;
  grid-template-columns: repeat(1 1fr);
}
.information__item {
  padding: 9px 16px;
  border-bottom: 1px solid black;
}
.episodes {
  flex: 1;
}
</style>
