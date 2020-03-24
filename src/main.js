import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import VueRouter from "vue-router";
import VueAxios from "vue-axios";
import axios from "axios";

import MealAreas from "./components/MealAreas";
import MealList from "./components/MealList";
import MealDetail from "./components/MealDetail";

Vue.use(VueAxios, axios);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", name: 'meal-areas', component: MealAreas },
    { path: "/:strArea", name: "meal-list", component: MealList, props: true },
    { path: "/meal/:idMeal", name: 'meal-detail', component: MealDetail, props: true }
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
