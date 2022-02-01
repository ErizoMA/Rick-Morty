<template>
  <div class="information">
    <p class="information__title">Informations</p>
    <div class="information__list">
      <div class="information__item">
        <h2>Gender</h2>
        <p>{{ details.gender }}</p>
        <div class="line"></div>
      </div>
      <div class="information__item">
        <h2>Status</h2>
        <p>{{ details.status }}</p>
        <div class="line"></div>
      </div>
      <div class="information__item">
        <h2>Specie</h2>
        <p>{{ details.species }}</p>
        <div class="line"></div>
      </div>
      <div class="information__item">
        <h2>Origin</h2>
        <p>{{ details.origin.name }}</p>
        <div class="line"></div>
      </div>
      <div class="information__item">
        <h2>Type</h2>
        <p>{{ details.type || "Unknown" }}</p>
        <div class="line"></div>
      </div>
      <div class="information__item">
        <h2>Location</h2>
        <p>{{ details.location.name }}</p>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["details"],
};
</script>

<style scoped>
.information {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.information__title {
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
  text-align: left;
}
.information__item h2 {
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #081f32;
}
.information__item p {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #6e798c;
}

.line {
  width: 100%;
  border-bottom: 1px solid rgb(206, 206, 206);
  margin-top: 12px;
}
</style>
