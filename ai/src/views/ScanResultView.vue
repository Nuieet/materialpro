<template>
  <img :src='url' alt="" style="margin-top: 2rem; margin-left: 2.7rem;">
  <van-cell-group style="margin-top: 1rem;">
    <van-cell title="企业名称" :value=code.firm />
    <van-cell title="生产厂家" :value=code.maker />
    <van-cell title="销售地区" :value=code.city />
    <van-cell title="查询次数" :value=code.times />
    <van-cell title="首次查询" :value=code.first />
    <van-cell title="产品识别码" :value=code.anticode />
  </van-cell-group>
  <van-collapse v-model="activeNames">
    <van-collapse-item title="查询记录" name="1">
      <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="item, index in logList" :key="index" :title="index + 1 + ' --- ' + this.dateFormat(item.createTime) + ' --- ' + item.city" />
      </van-list>
    </van-collapse-item>
  </van-collapse>
</template>
<script>
import imga from "../../public/img/genuine.jpg";
// import imgb from "../../public/img/repeat.jpg";
 import request from '../util/request'
import { ref } from 'vue';
export default {
  setup() {
    const activeNames = ref(['']);
    const loading = ref(false);
    const finished = ref(true);
    const onLoad = () => {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {


        // 加载状态结束


        // 数据全部加载完成

      }, 1000);
    };
    return {
      activeNames,
      onLoad,
      loading,
      finished,
    };
  },
  data() {
    return {
      url: imga,
      logList: [],
      code: {
        id: 0,
        code: "",
        firm: "",
        maker: "",
        city: "",
        times: 0,
        first: "",
        anticode: localStorage.getItem("id"),
        batch: 0,
        status: 1,
      },
    }
  },
  methods: {
    dateFormat(createTime){
        return  createTime[0]+'-'+createTime[1]+'-'+createTime[2]+'　'+createTime[3]+':'+createTime[4]+':'+createTime[5];
    },
    getData(){
      request
        .post(`/verify`, {
          id: localStorage.getItem("id"),
          code: localStorage.getItem("code")
        })
        .then((res) => {
            this.code.times=res.data.data.count;
            this.code.first=this.dateFormat(res.data.data.record[res.data.data.record.length-1].createTime);
            this.logList=res.data.data.record;
            this.logList.reverse();
        });
    }
  },
  created() {
    this.getData();
  }
}

</script>