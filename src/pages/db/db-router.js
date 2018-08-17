import Vue from "vue";
import Router from "vue-router";
import Home from "./db-home.vue";
import Cookies from "js-cookie";

Vue.use(Router);

let router = new Router({
  // mode: "history",
  base: '/db.html',
  routes: [
    {
      path: "*",
      name: "home",
      component: Home,
      children: [
        {
          path: "/createDB",
          name: "createDB",
          component: () =>
            import(/* webpackChunkName: "db_create" */ "./db-create.vue")
        },
        {
          path: "/queryText",
          name: "queryText",
          component: () =>
            import(/* webpackChunkName: "db_query" */ "./db-query.vue")
        },
        {
          path: "/listDB",
          name: "listDB",
          component: () =>
            import(/* webpackChunkName: "db_createlist" */ "./db-createlist.vue")
        }
      ]
    }
  ]
});
// router.beforeEach((to, from, next) => {
//   next();
// });
export default router;
