<template>
  <div class="episodes">
    <p class="episodes__title">Episodes</p>
    <div class="episodes__list">
      <div v-for="episode in episodes" class="episode" :key="episode">
        <!-- <p>{{ episode }}</p> -->
        <h2>S01E01</h2>
        <h3>Pilot</h3>
        <p>December 2, 2013</p>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["episodes"],
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
}

.episode h2 {
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #081f32;
}

.episode h3 {
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
</style>
