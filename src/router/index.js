import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DriverTheContainer from "../components/driver/TheContainer.vue";
import RiderTheContainer from "../components/rider/TheContainer.vue";
import DriverMesCoruses from "../views/driver/MesCoruses.vue";
import RiderMesCoruses from "../views/rider/MesCoruses.vue";
import Rider_Sponser from "../views/rider/Sponser.vue";
import Driver_Sponser from "../views/driver/Sponser.vue";
import Rider_TaxProfile from "../views/rider/TaxProfile.vue";
import Driver_TaxProfile from "../views/driver/TaxProfile.vue";
import Driver_Profile from "../views/driver/Profile.vue";
import Rider_Profile from "../views/rider/Profile.vue";
import Wallet from "../views/rider/Wallet.vue";
import Bancaires from "../views/Bancaires.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/rider/home",
    component: RiderTheContainer,
    children: [
      {
        path: "/rider/home",
        name: "Home",
        component: Home,
      },
      {
        path: "/rider/mes-coruses",
        name: "Mes Coruses",
        component: RiderMesCoruses,
      },
      {
        path: "/rider/sponser",
        name: "Sponser",
        component: Rider_Sponser,
      },
      {
        path: "/rider/tax-profile",
        name: "Tax Profile",
        component: Rider_TaxProfile,
      },
      {
        path: "/rider/profile",
        name: "Profile",
        component: Rider_Profile,
      },
      {
        path: "/rider/wallet",
        name: "Wallet",
        component: Wallet,
      },
    ],
  },
  {
    path: "/driver",
    redirect: "/driver/home",
    component: DriverTheContainer,
    children: [
      {
        path: "/driver/home",
        name: "Home",
        component: Home,
      },
      {
        path: "/driver/mes-coruses",
        name: "Mes Coruses",
        component: DriverMesCoruses,
      },
      {
        path: "/driver/sponser",
        name: "Sponser",
        component: Driver_Sponser,
      },
      {
        path: "/driver/tax-profile",
        name: "Tax Profile",
        component: Driver_TaxProfile,
      },
      {
        path: "/driver/profile",
        name: "Profile",
        component: Driver_Profile,
      },
      {
        path: "/driver/bancaires",
        name: "Bancaires",
        component: Bancaires,
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
