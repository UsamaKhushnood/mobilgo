import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TheContainer from "../components/main/TheContainer.vue";
import MesCoruses from "../views/MesCoruses.vue";
import Sponser from "../views/Sponser.vue";
import TaxProfile from "../views/TaxProfile.vue";
import Profile from "../views/Profile.vue";
import Wallet from "../views/Wallet.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: TheContainer,
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home,
      },
      {
        path: "/mes-coruses",
        name: "Mes Coruses",
        component: MesCoruses,
      },
      {
        path: "/sponser",
        name: "Sponser",
        component: Sponser,
      },
      {
        path: "/tax-profile",
        name: "Tax Profile",
        component: TaxProfile,
      },
      {
        path: "/profile",
        name: "Profile",
        component: Profile,
      },
      {
        path: "/wallet",
        name: "Wallet",
        component: Wallet,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
