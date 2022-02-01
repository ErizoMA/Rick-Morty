import { createRouter, createWebHistory } from "vue-router";
import Characters from "../views/Characters.vue";
import Locations from "../views/Locations.vue";
import Episodes from "../views/Episodes.vue";
import CharacterDetails from "../views/CharacterDetails.vue";
import EpisodeDetails from "../views/EpisodeDetails.vue";
import LocationDetails from "../views/LocationDetails.vue";

const routes = [
  {
    path: "/",
    name: "Characters",
    component: Characters,
  },
  {
    path: "/characters",
    redirect: "/",
  },
  {
    path: "/episodes",
    name: "Episodes",
    component: Episodes,
  },
  {
    path: "/locations",
    name: "Locations",
    component: Locations,
  },
  {
    path: "/characters/:id",
    name: "Character Details",
    component: CharacterDetails,
    props: true,
  },
  {
    path: "/episodes/:id",
    name: "Episode Details",
    component: EpisodeDetails,
    props: true,
  },
  {
    path: "/locations/:id",
    name: "Location Details",
    component: LocationDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
