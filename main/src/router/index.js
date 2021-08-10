import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Qiankun from "@/components/Qiankun";

Vue.use(Router);

export default new Router({
  mode: "history",
  // 嘉定主应用部署在/a/b/c/路径下
  base: "/a/b/c/",
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
    },
    {
      path: "/qk/*",
      name: "Qiankun",
      component: Qiankun,
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});
