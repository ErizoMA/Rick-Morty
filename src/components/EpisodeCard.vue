<template>
  <router-link :to="{ name: 'Episode Details', params: { id: episode.id } }">
    <div class="card" :key="episode.id">
      <div class="card__info">
        <p class="name">{{ episode.name }}</p>
        <p class="episode-font air-date--font">{{ episode.air_date }}</p>
        <p class="episode-font episode--font">{{ episode.episode }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["episode"],
};
</script>

<style scoped>
.card {
  width: 240px;
  height: 128px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  overflow: hidden;
  padding: 25px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card__info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.name {
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
}
.episode-font {
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
}
.air-date--font {
  font-weight: normal;
}
.episode--font {
  font-weight: bold;
}
</style>
