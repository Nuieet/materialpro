<template>
  <img src="http://ewem.oo0.site/res/images/cailiao/shangbiao.jpg" alt="" style="width: 4rem; margin-left:3rem; margin-top:2rem">
  <br>
  <van-cell-group inset style="margin-top: 1rem; margin-left: 3.3rem; width: 3.5rem;">
    <van-cell title="ShangHai,China" icon="location" />
    <van-cell title="ShangHai,China" icon="phone" />
  </van-cell-group>
  <br><br><br>
  <text style="font-size: 15px; margin-left:4.2rem;margin-top:1rem">意见反馈</text>
  <van-form @submit="onSubmit" style="margin-top:1rem">
    <van-cell-group inset>
      <van-field v-model="suggest" rows="2" autosize name="意见描述" label="意见描述" type="textarea" maxlength="100"
        placeholder="意见描述" show-word-limit />
      <van-field name="uploader" label="文件上传">
        <template #input>
          <van-uploader v-model="value" :after-read="afterRead" multiple />
        </template>
      </van-field>
      <van-field v-model="phonenumber" name="联系电话" label="联系电话" placeholder="联系电话"
        :rules="[{ required: true, message: '请填写联系电话' }]" />
      <van-field v-model="mail" name="邮箱" label="邮箱" placeholder="邮箱" :rules="[{ required: true, message: '请填写邮箱' }]" />
    </van-cell-group>
    <div style="margin: 15px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    const suggest = ref('');
    const phonenumber = ref('');
    const mail = ref('');
    const onSubmit = (values) => {
      console.log('submit', values);
    };
    const afterRead = (file) => {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    };
    const value = ref([]);
    return { value, suggest, phonenumber, mail, onSubmit, afterRead };
  },
};

</script>
<style>
</style>