<template>
  <div class="searchbar">
    <input
      type="text"
      v-model="query.name"
      class="input"
      placeholder="Filter by name ..."
    />

    <select v-model="query.status" class="select">
      <option value="">Status</option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">unknown</option>
    </select>
    <select v-model="query.gender" class="select">
      <option value="">Gender</option>
      <option value="female">Female</option>
      <option value="male">Male</option>
      <option value="genderless">Genderless</option>
      <option value="unknown">Unknown</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ["query"],
};
</script>

<style scoped>
.input {
  font-family: Roboto;
  font-size: 16px;
  height: 56px;
  border-radius: 8px;
  width: 326px;
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

.select {
  font-family: Roboto;
  line-height: 19px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  height: 56px;
  border-radius: 8px;
  width: 240px;
  padding-left: 14px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  outline: none;
  background: url("../assets/arrow-up-down.svg") no-repeat scroll 90% center;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
}
.searchbar {
  display: flex;
  gap: 20px;
  margin: 16px auto 61px;
}
</style>
