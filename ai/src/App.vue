<template>
  <router-view />
  <van-tabs sticky v-model:active="active" style="top: 0px; position: fixed; width: 100%;">
    <van-tab title="主页" replace to="/"></van-tab>
    <van-tab title="查询" replace to="/scan"></van-tab>
  </van-tabs>
</template>
<script>
import { Tab, Tabs } from 'vant';
import router from '@/router';
export default {

  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,


  },

  data() {
    return {
      active:0,
      login: localStorage.getItem("token"),
    }
  },
  watch: {
 
  },
  created() {
     localStorage.setItem("active",1);
     console.log(localStorage.getItem("active"));
    router.push("/");
  },
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
