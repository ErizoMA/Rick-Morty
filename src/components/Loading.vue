<template>
  <div class="loading">
    <p class="loading__title">Loading...</p>
    <img src="../assets/loading.svg" alt="logo" class="loading__img" />
  </div>
</template>

<script>
export default {
  props: ["loading"],
};
</script>

<style scoped>
@keyframes spin {
  0% {
    opacity: 1;
    transform: rotate(0deg);
  }
  100% {
    display: none;
    opacity: 0.8;
    transform: rotate(360deg);
  }
}
.loading {
  position: relative;
}
.loading__img {
  height: 700px;
  animation: spin 10s linear infinite;
}
.loading__title {
  font-weight: 700;
  font-size: 40px;
  line-height: 30px;
  align-items: center;
  color: rgba(0, 0, 0, 0.87);
  position: absolute;
  top: 50%; /* position the top  edge of the element at the middle of the parent */
  left: 50%; /* position the left edge of the element at the middle of the parent */
  letter-spacing: 4px;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 10;
}
</style>
