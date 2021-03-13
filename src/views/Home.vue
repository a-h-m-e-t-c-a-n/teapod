<template>
  <div class="container p-d-flex-column">
    <div class="p-d-flex" style="width:100%">
      <div class="p-d-flex" style="width:50%">
        <VideoPlayer src="sample/1.mp4" muted hover-play/>
      </div> 
       <div class="p-d-flex" style="width:50%">
        <Card>
          <template #title>
              Advanced Card
          </template>
          <template #content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
          </template>
          <template #footer>
              <Button icon="pi pi-check" label="Save" />
              <Button icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em" />
          </template>
      </Card>
      </div> 
    </div>
    <div class="p-d-flex-row" style="width:25vh;background-color:blue">
      <VideoPlayer />
    </div>
    <div class="p-d-flex-row" style="width:25vh;background-color:blue">
      <VideoPlayer />
    </div>
    <div class="p-d-flex-row" style="width:25vh;background-color:blue">
      <VideoPlayer />
    </div>
    <div class="p-d-flex-row" style="width:25vh;background-color:blue">
      <VideoPlayer />
    </div>
    <div class="p-d-flex-row" style="width:25vh;background-color:blue">
      <VideoPlayer />
    </div>
  </div>

</template>
<style scoped>

.container {
  margin: auto;
  max-width: 960px;
  background-color: red;
}

</style>
<script>
// @ is an alias to /src
import VideoPlayer from '../components/VideoPlayer.vue';

export default {
  name: "Home",
  components: {
    VideoPlayer
  },
  props: {
    id: String,
  },
  data() {
    return {
      display: false,
    };
  },
  watch: {
    id() {
      this.updateId();
    },
  },
  methods: {
    linkclick() {
      console.log("link clicked", this.id);
      this.$router.push("/3");
    },
    updateId() {
      console.log("updateroute", this.id);
      this.display = this.id != null;
    },
    dialogClose() {
      console.log("dialog closed", this.$route);
      this.$router.push({ query: { sex: "k" } });
    },
  },

  created() {},
  mounted() {
    this.updateId();
  },
};
</script>
