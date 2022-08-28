<template>
  <router-view />
  <van-tabs sticky v-model:active="active" :before-change="beforeChange"
    style="top: 0px; position: fixed; width: 100%;">
    <van-tab title="主页" replace to="/"></van-tab>
    <van-tab title="我的" replace to="/me"></van-tab>
    <van-tab title="登录" replace to="/login"></van-tab>
  </van-tabs>

</template>
<script>
import { ref } from 'vue';
import VConsole from 'vconsole';
import router from '@/router';
new VConsole();
export default {
  setup() {

    const active = ref(2);
    if (localStorage.getItem("token")) {

      active.value = 0;
      router.push("/");
    }
    else {
      active.value = 2;
    }
    const beforeChange = (index) => {
      // 返回 false 表示阻止此次切换
      if (index !== 2 && !localStorage.getItem("token")) {
        return false;
      }

      // 返回 Promise 来执行异步逻辑
      return new Promise((resolve) => {
        // 在 resolve 函数中返回 true 或 false
        resolve(index !== 2);
      });
    };

    return {
      active,
      beforeChange,
    };
  },

  watch: {
    "$router.path": function () {
      this.login = localStorage.getItem("token");
    }
  }
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
