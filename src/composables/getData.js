const { ref } = require("vue");

const getData = (url) => {
  const results = ref([]);
  const info = ref([]);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw Error("Sorry, this page is not available");
      const data = await response.json();
      results.value = data.results;
      info.value = data.info;
      console.log("fetch data");
    } catch (error) {
      console.error(error.message);
    }
  };

  const loadMore = async () => {
    const { next: newUrl } = info.value;
    if (newUrl === null || newUrl === undefined) return;
    try {
      const response = await fetch(newUrl);
      console.log("fetch more");
      if (!response.ok) throw Error("No more content");
      const data = await response.json();
      info.value = data.info;
      results.value = [...results.value, ...data.results];
    } catch (error) {
      console.error(error.message);
    }
  };
  return { results, info, fetchData, loadMore };
};

export default getData;
