import { ref } from "vue";

const getAllResults = (arrayUrls) => {
  const arrayData = ref([]);
  const loading = ref(true);
  const fetchArrayUrls = async () => {
    loading.value = true;
    try {
      const results = await Promise.all(
        arrayUrls.map((url) => fetch(url).then((res) => res.json()))
      );
      if (results) loading.value = false;
      arrayData.value = results;
    } catch (error) {
      console.log(error);
    }
  };

  return { fetchArrayUrls, arrayData, loading };
};

export default getAllResults;
