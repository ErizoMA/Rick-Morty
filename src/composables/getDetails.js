import { ref } from "vue";

const getDetails = (props, url) => {
  const details = ref({});
  const fetchData = async () => {
    try {
      const response = await fetch(url + props.id);
      if (!response.ok) throw Error("Can not find this character");
      const data = await response.json();
      details.value = data;
    } catch (error) {
      console.error(error.message);
    }
  };
  return { details, fetchData };
};

export default getDetails;
