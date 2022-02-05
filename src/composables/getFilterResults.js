import { ref } from "vue";
const getFilterResults = (url, results, info) => {
  const query = ref({ name: "", status: "", gender: "" });
  const fetchQuery = async () => {
    try {
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
    } catch (error) {
      results.value = [];
      info.value = {};
      console.error(error.message);
    }
  };
  return { fetchQuery, query, results };
};

export default getFilterResults;
