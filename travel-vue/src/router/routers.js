import { createRouter, createWebHashHistory } from "vue-router";
import locations from "../views/locations";
import foods from "../views/foods";
import hotels from "../views/hotels";

const routes = [
   
  {
    path: "/",
    name: "locations",
    component: locations,
  },
  {
    path: "/foods",
    name: "foods",
    component: foods,
  },
  {
    path: "/hotels",
    name: "hotels",
    component: hotels,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
