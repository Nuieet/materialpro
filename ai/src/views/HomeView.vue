
<template>
  <van-swipe :autoplay="3000" style="margin-top:1rem ;">
    <van-swipe-item v-for="image, index in swipeList" :key="index">
      <img :src="image.url" style="width: 100%; height: 5rem;" />
    </van-swipe-item>
  </van-swipe>
  <van-button type="success" style="margin-left:1.3rem;margin-top:1rem" to="/scan">防伪追溯查询</van-button>
  <van-button type="success" style="margin-left:1.3rem;margin-top:1rem" to="/future">未来包装计划</van-button>
  <van-grid :column-num="3" style="margin-top:1.3rem">
    <van-grid-item v-for="image, index in gridList" :key="index">
      <img :src="image.url" style="width: 100%;" />
      <text class="text">{{ image.text }}</text>
    </van-grid-item>
  </van-grid>
  <img src="http://ewem.oo0.site/res/images/cailiao/liaojie.jpg" alt="" style="width:3rem;margin-left: 1.3rem;margin-top: 0.5rem"
    @click.prevent="know" />
  <img src="http://ewem.oo0.site/res/images/cailiao/lianxi.jpg" alt="" style="width:3rem;margin-left: 1.3rem; margin-top: 0.5rem;"
    @click.prevent="contact" />
</template>
<script >
// @ is an alias to /src
import router from '@/router';
import { Grid, GridItem } from 'vant';
import { Swipe, SwipeItem } from "vant";
import { Image as VanImage } from 'vant';
import { Sidebar, SidebarItem } from 'vant';
import VConsole from 'vconsole';
new VConsole();
export default {
  name: 'HomeView',
  data() {
    return {
      swipeList: [
             {url:"http://ewem.oo0.site/res/images/lunbotu/1.jpg"},
             {url:"http://ewem.oo0.site/res/images/lunbotu/2.jpg"},
             {url:"http://ewem.oo0.site/res/images/lunbotu/3.jpg"},
      ],
      gridList: [
        {
              url:"http://ewem.oo0.site/res/images/1/1.jpg",
              text:"共挤膜",
        },
         {
              url:"http://ewem.oo0.site/res/images/1/2.jpg",
              text:"复合卷膜",
        },
         {
              url:"http://ewem.oo0.site/res/images/1/3.jpg",
              text:"狗粮袋",
        },
         {
              url:"http://ewem.oo0.site/res/images/1/4.jpg",
              text:"医用袋",
        },
         {
              url:"http://ewem.oo0.site/res/images/1/5.jpg",
              text:"吸嘴袋",
        },
         {
              url:"http://ewem.oo0.site/res/images/1/6.jpg",
              text:"面膜袋",
        },
         {
              url:"http://ewem.oo0.site/res/images/1/7.jpg",
              text:"食品袋",
        },
         {
              url:"http://ewem.oo0.site/res/images/1/8.jpg",
              text:"湿巾袋",
        },
         {
              url:"http://ewem.oo0.site/res/images/1/8.jpg",
              text:"日用品袋",
        },

      ],

    }
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [VanImage.name]: VanImage,
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
  },
 
  methods: {
    know() {
      router.push("/know");   
    },
    contact() {
      router.push("/contact");
    }
  },
}
</script>
<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 100px;
  text-align: center;
  background-color: #39a9ed;
  width: 100%;
}

.text {
  font-size: 10px;
  margin-top: 5px;
}
</style>