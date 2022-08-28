<template>

  <van-cell-group style="margin-top:3rem;" inset>
    <van-cell title="用户名" :value="user.username" />
    <van-cell title="密码" :value="user.password" />
    <van-cell title="id" :value="user.id" />
  </van-cell-group>


  <van-button type="primary" @click="logout" round size="large"
    style="margin-top:1rem; width: 90%; margin-left: 1.2rem;height: 3rem;">退出</van-button>
</template>
<script>
import { Dialog } from 'vant';
import request from '../util/request.js'
export default {

  data() {
    return {
      user: {
        username: localStorage.getItem("username"),
        password: "",
        id: ""
      }

    }
  },
  created() {
    this.getuser();
  },
  methods: {
    logout() {
      Dialog.confirm({
        title: '退出登录',
        message:
          '确认退出吗？',
      })
        .then(() => {
          localStorage.clear();
          this.$router.push("/");
          location.reload();
          Toast({
            message: '退出成功',
            position: 'bottom',
          });
        })
        .catch(() => {
          // on cancel
        });
    },
    getuser() {
      request.get(`/getuser/${this.user.username}`).then((res) => {
        if (res.data.user) {
          this.user = res.data.user;
        }
        else {
          localStorage.clear();
          this.$router.push("/");
          location.reload();
        }
      })
    }
  }
}
</script>