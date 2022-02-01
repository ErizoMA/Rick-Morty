<template>
  <router-link :to="{ name: 'Location Details', params: { id: location.id } }">
    <div class="card" :key="location.id">
      <div class="card__info">
        <p class="name">{{ location.name }}</p>
        <p class="type">{{ location.type }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["location"],
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
  padding: 38px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.name {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: rgba(0, 0, 0, 0.87);
}
.type {
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
}
</style>
