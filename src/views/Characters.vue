<template>
  <img src="../assets/logo-chr.png" alt="logo-characters" class="logo" />
  <h1>Filters component</h1>
  <div class="cards-container">
    <div class="card">
      <img class="card__img" src="" alt="" />
      <div class="card__info">
        <p class="name">Rick Sanchez</p>
        <p class="type">Human</p>
      </div>
    </div>
    <div class="card">
      <img class="card__img" src="" alt="" />
      <div class="card__info">
        <p class="name">Rick Sanchez</p>
        <p class="type">Human</p>
      </div>
    </div>
    <div class="card">
      <img class="card__img" src="" alt="" />
      <div class="card__info">
        <p class="name">Rick Sanchez</p>
        <p class="type">Human</p>
      </div>
    </div>
    <div class="card">
      <img class="card__img" src="" alt="" />
      <div class="card__info">
        <p class="name">Rick Sanchez</p>
        <p class="type">Human</p>
      </div>
    </div>
    <div class="card">
      <img class="card__img" src="" alt="" />
      <div class="card__info">
        <p class="name">Rick Sanchez</p>
        <p class="type">Human</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  width: 600px;
  height: 200px;
}
.cards-container {
  max-width: 1020px;
  background-color: rgb(247, 240, 240);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  row-gap: 24px;
}
.card {
  width: 240px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
}
.card__img {
  width: 100%;
  height: 168px;
}
.card__info {
  padding: 16px 12px;
}
</style>
