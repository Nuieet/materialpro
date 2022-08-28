
<template>
  <van-form @submit="onSubmit" style="margin-top: 3rem;">
    <van-cell-group inset>
      <van-field v-model="username" name="username" label="用户名" placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]" />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        登录
      </van-button>
    </div>
  </van-form>

</template>
<script>
import { Toast } from 'vant';
import { ref } from 'vue';
import router from '@/router';
import request from '../util/request'
export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const onSubmit = (values) => {
      request.post("/login", values).then((res) => {
        if (res.data.code === 20000) {
          localStorage.setItem("username", values.username);
          localStorage.setItem("token", res.data.token);
          router.push("/");
          location.reload();
          Toast({
            message: '登录成功',
            position: 'bottom',
          });
        }
        else {
          Toast({
            message: '用户名或密码错误',
            position: 'bottom',
          });
        }
      })
    };

    return {
      username,
      password,
      onSubmit,
    };
  },
};

</script>
