<template>
  <div class="container" v-if="details">
    <img :src="details.image" :alt="details.name" class="character-img" />
    <h1 class="character-name">{{ details.name }}</h1>
    <div class="character-details">
      <CharacterInfo :details="details" />
      <CharacterEpisodes v-if="details" :episodes="details.episode" />
    </div>
  </div>
</template>

<script>
import CharacterInfo from "../components/CharacterInfo.vue";
import CharacterEpisodes from "../components/CharacterEpisodes.vue";
import { APISettings } from "../api/config";
import getDetails from "../composables/getDetails";
export default {
  props: ["id"],
  components: { CharacterInfo, CharacterEpisodes },
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
</style>
