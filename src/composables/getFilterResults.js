import { ref } from "vue";
const getFilterResults = (url, results, info) => {
  const query = ref({ name: "", status: "", gender: "" });
  const error = ref(false);
  const fetchQuery = async () => {
    try {
      error.value = false;
      const response = await fetch(
        url +
          "?name=" +
          query.value.name +
          "&status=" +
          query.value.status +
          "&gender=" +
          query.value.gender
      );
      if (!response.ok) throw Error("Not found");
      const data = await response.json();

      results.value = data.results;
      info.value = data.info;
    } catch (e) {
      error.value = true;
      results.value = [];
      info.value = {};
      console.error(e.message);
    }
  };
  return { fetchQuery, query, results, error };
};

export default getFilterResults;
