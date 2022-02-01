<template>
  <div class="container">
    <p>{{ details.name }}</p>
    <div class="info">
      <div class="info__episode">
        <p>Type</p>
        <p>{{ details.type }}</p>
      </div>
      <div class="info__date">
        <p>Dimension</p>
        <p>{{ details.dimension }}</p>
      </div>
    </div>
    <div>
      <p>Residents</p>
      <div>
        <p v-for="resident in details.residents" :key="resident">
          {{ resident }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { APISettings } from "../api/config";
import getDetails from "../composables/getDetails";
export default {
  props: ["id"],
  setup(props) {
    const { locationsUrl } = APISettings;
    const { details, fetchData } = getDetails(props, locationsUrl);
    fetchData();
    return { details };
  },
};
</script>

<style></style>
