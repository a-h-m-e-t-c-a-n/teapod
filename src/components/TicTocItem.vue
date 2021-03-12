<template>
  <div class="content" @mouseover="hover = true" @mouseleave="hover = false">
    <video
      ref="player"
      :src="VideoSource"
      autoPictureInPicture="true"
      webkit-playsinline="true"
      playsinline="true"
      autoplay="false"
      muted="muted"
    ></video>
  </div>
</template>

<script>
//import BlockUI from 'primevue/blockui';

export default {
  name: "TicTocItem",
  components: {
  //  BlockUI,
  },
  props: {},
  data: function () {
    return {
      VideoSource: "sample/1.mp4",
      hover:false,
    };
  },
  created: function () {
  },
   watch: {
    hover: function (val) {
      if(val){
        this.$refs.player.play();
      }
      else{
        this.$refs.player.pause();
      }
      console.log("hover",val);
    },
  },
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  background-color: #42b983;
}
</style>
