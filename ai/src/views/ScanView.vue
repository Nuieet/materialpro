<template>

  <img src="http://ewem.oo0.site/res/images/cailiao/shangbiao.jpg" alt=""
    style="width: 4rem; margin-top:2rem; margin-left:3rem">
  <van-divider>科技让企业加速发展</van-divider>

  <div style="position: relative; margin-top: 1rem; margin-left: 2.7rem;">
    <text style="margin-top:0.5rem; position: absolute;">查询真伪</text>
    <img src="../../public/img/scan.jpg" alt="" style="width: 20%; position: absolute; margin-left: 1.7rem;;"
      @click="scanCode">
    <text style="margin-top:0.5rem; position: absolute; margin-left: 3.2rem;">点击扫码</text>
  </div>

  <br><br><br>
  <van-form @submit="onSubmit" style="margin-top: 1rem;">
    <van-cell-group inset>
      <van-field v-model="id" name="id" label="防伪码" placeholder="防伪码"
        :rules="[{ required: true, message: '请填写防伪码' }]" />
      <van-field v-model="code" name="code" label="验证码" placeholder="验证码"
        :rules="[{ required: true, message: '请填写验证码' }]" />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="success" native-type="submit">
        查询
      </van-button>
    </div>
  </van-form>
  <div align="center" style="width: 80%; margin-left:10%;">
    <text>{{ `说明:点击上方的扫码图标,将弹出的扫码框对准
    包装上的防伪二维码后输入验证码,或直接输入验证码和防伪码后点击"查询"按钮,进行产品的真伪验
    证。`}}
    </text>
  </div>



</template>
<script>
import { Toast } from 'vant';
import request from '@/util/request';
import router from '@/router';
export default {
  data() {
    return {
      id: localStorage.getItem("id"),
      code: "",
      codeList: [],
      f: 0,
    }
  },
  methods: {
    onSubmit(values) {
      request
        .post(`/verify`, {
          id: values.id,
          code: values.code
        })
        .then((res) => {
          if (res.data.data) {
            localStorage.setItem("id", values.id);
            localStorage.setItem("code", values.code);
            router.push("/scanresult");
          }
          else {
            console.log(res);
            Toast({
              message: '防伪码或验证码错误',
              position: 'bottom',
            });
            localStorage.setItem('id', "");
            this.id = "";
            this.code = "";
            router.push("/scan");
          }
        });
    },
    scanCode() {
      console.log('浏览器信息', navigator.userAgent);
      router.push("/scancodepage");
    },
  },
  created() {
    localStorage.setItem("id", "");
  }
};
</script>
<style>
text {
  font-size: 15px;

}
</style>