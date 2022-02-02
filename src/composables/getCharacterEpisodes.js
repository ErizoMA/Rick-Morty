import { ref } from "vue";

const getCharacterEpisodes = (props) => {
  const characterEpisodes = ref([]);
  const fetchEpisodes = async () => {
    const results = await Promise.all(
      props.episodes.map((url) => fetch(url).then((res) => res.json()))
    );
    characterEpisodes.value = results;
  };

  return { fetchEpisodes, characterEpisodes };
};

export default getCharacterEpisodes;
