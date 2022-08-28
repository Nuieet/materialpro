<template>
  <van-form @submit="onSubmit" style="margin-top:3rem">
    <van-cell-group inset>
      <van-field v-model="code" name="code" label="二维码ID" placeholder="二维码ID"
        :rules="[{ required: true, message: '请填写二维码ID' }]" />
      <van-field v-model="maker" is-link readonly name="maker" label="制造厂商" placeholder="点击选择制造厂商"
        @click="showPickera = true" />
      <van-popup v-model:show="showPickera" position="bottom">
        <van-picker :columns="makerList" @confirm="onConfirma" @cancel="showPickera = false" />
      </van-popup>
      <van-field v-model="city" is-link readonly name="city" label="销售城市" placeholder="点击选择销售城市"
        @click="showPicker = true" />
      <van-popup v-model:show="showPicker" position="bottom">
        <van-picker :columns="cityList" @confirm="onConfirm" @cancel="showPicker = false" />
      </van-popup>
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>

</template>
<script>
import { ref } from 'vue';
import request from '../util/request.js'
export default {
  setup() {
    const code = ref('');
    const onSubmit = (values) => {
      request
        .post(`/collect`, {
          username: localStorage.getItem("username"),
          code: code.value,
          maker: maker.value,
          city: city.value
        })
      code.value = '';
      maker.value = '';
      city.value = '';
    };
    const city = ref('');
    const showPicker = ref(false);
    const cityList = [];
    const maker = ref('');
    const showPickera = ref(false);
    const makerList = [];
    const onConfirm = (value) => {
      city.value = value;
      showPicker.value = false;
    };
    const onConfirma = (value) => {
      maker.value = value;
      showPickera.value = false;
    };
    const getCityList = () => {
      request.get(`/city?page=1&total=10`).then((res) => {
        for (let i in res.data.data) {
          cityList[i] = res.data.data[i].name;
        }
      });
    };
    const getMakerList = () => {
      request.get(`/maker?page=1&total=10`).then((res) => {
        for (let i in res.data.data) {
          makerList[i] = res.data.data[i].name;
        }
      });
    };
    return {
      code,
      maker,
      onSubmit,
      city,
      cityList,
      onConfirm,
      onConfirma,
      showPicker,
      showPickera,
      makerList,
      getCityList,
      getMakerList
    };
  },
  created() {
    this.getCityList();
    this.getMakerList();
  }
};

</script>