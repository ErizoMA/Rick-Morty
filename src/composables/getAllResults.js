import { ref } from "vue";

const getAllResults = (arrayUrls) => {
  const arrayData = ref([]);
  const fetchArrayUrls = async () => {
    const results = await Promise.all(
      arrayUrls.map((url) => fetch(url).then((res) => res.json()))
    );
    arrayData.value = results;
  };

  return { fetchArrayUrls, arrayData };
};

export default getAllResults;
