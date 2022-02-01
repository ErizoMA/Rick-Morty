<template>
  <router-link
    :to="{ name: 'Character Details', params: { id: character.id } }"
  >
    <div class="card" :key="character.id">
      <img class="card__img" :src="character.image" :alt="character.name" />
      <div class="card__info">
        <p class="name">{{ shortName }}</p>
        <p class="species">{{ character.species }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["character"],
  setup(props) {
    const shortName = computed(() => {
      let name = props.character.name.split(" ");
      name.length = 2;
      return name.join(" ");
    });
    return { shortName };
  },
};
</script>

<style scoped>
.card {
  width: 240px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  overflow: hidden;
}
.card__img {
  width: 100%;
  height: 168px;
  object-fit: cover;
}
.card__info {
  padding: 12px 16px;
}
.name {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  text-align: left;
  color: rgba(0, 0, 0, 0.87);
}
.species {
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
  text-align: left;
}
</style>
