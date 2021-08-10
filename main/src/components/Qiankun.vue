<template>
  <div>
    <h3>Main app - qiankun</h3>
    <div id="tip"></div>
    <div id="qkContainer"></div>
  </div>
</template>

<script>
  import {
    registerMicroApps,
    start,
    addGlobalUncaughtErrorHandler,
  } from "qiankun";

  export default {
    mounted() {
      // 防止重复启动
      if (!window.qiankunRegistered) {
        window.qiankunRegistered = true;

        registerMicroApps([
          {
            name: "app1",
            entry: "/foo/bar/", // 子应用部署在/foo/bar/路径下
            container: "#qkContainer",
            activeRule: "/a/b/c/qk/app1",
            loader: (loading) => {
              this.render(loading ? "loading" : "");
            },
          },
        ]);

        addGlobalUncaughtErrorHandler((err) => {
          console.error(err);
          this.render("");
          document.getElementById("qkContainer").innerHTML = "当前服务不可用";
        });

        // 启动qiankun
        start();
      }
    },
    methods: {
      render(tip) {
        document.getElementById("tip").innerHTML = tip;
      },
    },
  };
</script>
