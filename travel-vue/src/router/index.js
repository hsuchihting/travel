import { createRouter, createWebHistory } from "vue-router";
import Location from "../views/Location.vue";
import Hotel from "../views/Hotel.vue";
import Food from "../views/Food.vue";
import SearchResult from "../views/SearchResult.vue";

const routes = [
  { path: "/", component: Food },
  {
    path: "/location",
    name: "Location",
    component: Location,
  },
  {
    path: "/hotel",
    name: "Hotel",
    component: Hotel,
  },
  {
    path: "/food",
    name: "Food",
    component: Food,
  },
  {
    path: "/search-result",
    name: "SearchResult",
    component: SearchResult,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
