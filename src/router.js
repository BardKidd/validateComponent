import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/ok",
      name: "OK",
      component: () => import("./components/ok.vue"),
    },
  ],
});
