<template>
<audio src="http://ewem.oo0.site/res/images/liaojie.mp3" controls="controls" autoplay="autoplay" style="margin-top:2rem;margin-left:0.9rem;"></audio>
<br><br><br>
<div v-for="image, index in list" :key="index">
<img :src="image" style="width: 70%; margin-left: 1.5rem; " />
</div>

 
 
</template>
<style></style>
<script>

 


  export default {
 
   data() {
   return {
    
        list:[],
   
 }
  
  
  },
  methods:{
    getlist(){
        for(let i=0;i<25;i++){
            this.list[i]=`http://ewem.oo0.site/res/images/liaojie/_-${i}.png`;
        }
    }
  },
  created(){
    this.getlist();
  }
  }
</script>
