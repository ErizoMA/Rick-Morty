<template>
  <div class="searchbar">
    <input
      type="text"
      v-model="query.name"
      class="input"
      placeholder="Filter by name ..."
    />
  </div>
</template>

<script>
export default {
  props: ["query"],
};
</script>

<style scoped>
.searchbar {
  display: flex;
  gap: 20px;
  margin: 16px auto 61px;
}
.input {
  font-family: Roboto;
  font-size: 16px;
  height: 56px;
  border-radius: 8px;
  width: 500px;
  padding: 16px 48px;
  line-height: 150%;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: url("../assets/search.svg") no-repeat scroll 10px center;
  outline: none;
}
.input::placeholder {
  line-height: 150%;
  color: rgba(0, 0, 0, 0.5);
}
</style>
