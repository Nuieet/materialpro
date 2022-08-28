<template>
  <Modal
      v-model="modals"
      width="400"
      :styles="{height:'400px',overflow:'hidden'}"
      scrollable
      footer-hide
      closable
      :title="titleFrom"
      :mask-closable="false"
      :z-index="1"
      @on-cancel="handleReset"
  >
    <div>
      <aplayer :playerOptions="aOption" v-if="isAudio"></aplayer>
      <vplayer :playerOptions="vOption" style="height: 300px;" v-if="!isAudio"></vplayer>
    </div>
  </Modal>
</template>
 
<script>
import {aplayer,vplayer} from 'vue-hls-player'
export default {
  name: "hlsPlayer",
  props:{
    rowData:Object,
    default:null
  },
  comments:{aplayer,vplayer},
  data(){
    return {
      modals:false,
      isAudio:true,
      titleFrom:'媒体',
      aOption:{
        type: "application/x-mpegURL",
        src: 'http://ph1vqefl0.bkt.clouddn.com/hlsnature2',
        preload: false,
        autoplay: false,
        isLoop: false,
        controls: 'progress,current,durration',
      },
      vOption:{
        type: "application/x-mpegURL",
        src: 'http://ph1vqefl0.bkt.clouddn.com/hlsnature2',
        preload: false,
        autoplay: false,
        isLoop: false,
        playsinline: false,
        poster: 'https://oimdztrab.qnssl.com/Frp4SyVe5PosdkUKRaE-krjK7B5z',
        controls: 'progress,current,durration,volume',
        crossOrigin: false
      }
    }
  },
  watch:{
    rowData(node){ 
      this.aOption['src'] = node.playUrl;
    }
  },
  created() {
 
  },
  methods:{
    handleReset(){}
  }
}
</script>
 
<style scoped>
 
</style>