<template>
  <div v-if="details" class="container">
    <p>{{ details.name }}</p>
    <div class="info">
      <div class="info__episode">
        <p>Episode</p>
        <p>{{ details.episode }}</p>
      </div>
      <div class="info__date">
        <p>Date</p>
        <p>{{ details.air_date }}</p>
      </div>
    </div>
    <div class="cast">
      <p>Cast</p>
      <p v-for="character in details.characters" :key="character">
        {{ character }}
      </p>
    </div>
  </div>
</template>

<script>
import { APISettings } from "../api/config";
import getDetails from "../composables/getDetails";
export default {
  props: ["id"],
  setup(props) {
    const { episodesUrl } = APISettings;
    const { details, fetchData } = getDetails(props, episodesUrl);
    fetchData();
    return { details };
  },
};
</script>

<style>
.info {
  display: flex;
}
.info__episode {
  flex: 1;
}
.info__date {
  flex: 1;
}
</style>
