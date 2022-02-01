<template>
  <div v-if="details" class="container">
    <img :src="details.image" :alt="details.name" class="character-img" />
    <h1 class="character-name">{{ details.name }}</h1>
    <div class="character-details">
      <CharacterInfo :details="details" />
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
import CharacterInfo from "../components/CharacterInfo.vue";
import { APISettings } from "../api/config";
import getDetails from "../composables/getDetails";
export default {
  props: ["id"],
  components: { CharacterInfo },
  setup(props) {
    const { charactersUrl } = APISettings;
    const { details, fetchData } = getDetails(props, charactersUrl);
    fetchData();
    return { details };
  },
};
</script>

<style scoped>
.character-img {
  border-radius: 50%;
  border: 5px solid #f2f2f7;
  margin: 16px auto;
}
.character-name {
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  color: #081f32;
  margin-bottom: 42px;
}
.character-details {
  width: 100%;
  display: flex;
}

.episodes {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
