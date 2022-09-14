import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SearchTrip from "../views/SearchTrip.vue";
import SeatSelection from "../views/SeatSelection.vue";
import PassengerInfo from "../views/PassengerInfo.vue";
import PaymentInfo from "../views/PaymentInfo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    alias: "/home",
    name: "Home",
    redirect: "search-trip",
  },
  {
    path: "/search-trip",
    name: "search-trip",
    component: SearchTrip,
  },
  {
    path: "/seat-selection/:trip_id?",
    name: "seat-selection",
    component: SeatSelection,
  },
  {
    path: "/passenger-info",
    name: "passenger-info",
    component: PassengerInfo,
  },
  {
    path: "/payment-info",
    name: "payment-info",
    component: PaymentInfo,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
