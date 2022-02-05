<template>
  <div v-if="episodes" class="episodes">
    <p class="episodes__title">Episodes</p>
    <div v-if="arrayData" class="episodes__list">
      <div v-for="episode in arrayData" class="episode" :key="episode.id">
        <router-link
          :to="{ name: 'Episode Details', params: { id: episode.id } }"
        >
          <h2>{{ episode.episode }}</h2>
          <h3>{{ episode.name }}</h3>
          <p>{{ episode.air_date }}</p>
          <div class="line"></div>
          <img src="../assets/arrow.svg" class="arrow" alt="arrow" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import getAllResults from "../composables/getAllResults";
export default {
  props: ["episodes"],
  setup(props) {
    const { fetchArrayUrls, arrayData } = getAllResults(props.episodes);
    fetchArrayUrls();
    return { arrayData };
  },
};
</script>

<style scoped>
.episodes {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.episodes__title {
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;
  color: #8e8e93;
  margin: 0;
}

.episode {
  padding: 10px 16px 0 16px;
  text-align: left;
  position: relative;
  cursor: pointer;
}

.episode h2 {
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #081f32;
}

.episode h3 {
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #6e798c;
}

.episode p {
  font-weight: 500;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #8e8e93;
}

.line {
  width: 100%;
  border-bottom: 1px solid rgb(206, 206, 206);
  margin-top: 12px;
}
.arrow {
  position: absolute;
  right: 10%;
  top: calc(50% - 24px / 2);
}
</style>
