import { createRouter, createWebHistory } from "vue-router";
import Characters from "../views/Characters.vue";
import Locations from "../views/Locations.vue";
import Episodes from "../views/Episodes.vue";
import CharacterDetails from "../views/CharacterDetails.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
