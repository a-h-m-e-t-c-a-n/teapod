<template>
  <video
    :style="videoStyles"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    ref="player"
    :src="VideoSource"
    autoPictureInPicture="true"
    webkit-playsinline="true"
    playsinline="true"
    loop="true"
  ></video>
</template>

<script>
//import BlockUI from 'primevue/blockui';

export default {
  name: "VideoPlayer",
  components: {
    //  BlockUI,
  },
  props: {
    src: String,
    hoverPlay: Number,
    maxWidth: String,
    maxHeight: String,
  },
  data: function () {
    return {
      VideoSource: this.src,
      hover: false,
    };
  },
  created: function () {},
  watch: {
    hover: function (val) {
      if (this.hoverPlay!=undefined) {
        if (val) {
          this.$refs.player.play();
        } else {
          this.$refs.player.pause();
        }
      }

      console.log("hover", val);
    },
  },
  computed: {
    videoStyles() {
      return {
        "max-width": `${this.maxWidth || "100%"}`,
        "max-height": `${this.maxHeight || "100%"}`,
      };
    },
  },
};
</script>


