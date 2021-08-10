import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Nest from "@/components/Nest";

Vue.use(Router);

export default new Router({
  base: window.__POWERED_BY_QIANKUN__ ? "/a/b/c/qk/app1/" : "/foo/bar/",
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/nest",
      component: Nest
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
