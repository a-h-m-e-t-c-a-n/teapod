<template>
  <Panel class="container p-d-flex-column">
    <template #header>
      <Button icon="pi pi-times" class="p-button-rounded p-button-danger" @click="closeContent" />
    </template>
    <div class="p-d-flex" style="width: 100%">
      <div class="p-d-flex" style="width: 50%">
        <VideoPlayer src="/sample/1.mp4" autoplay />
      </div>
      <div class="p-d-flex" style="width: 50%">
        <Card>
          <template #title>
            <a class="fake-link" href="/content/1" onclick="return false"
              >Advanced Card</a
            >
          </template>
          <template #content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </template>
          <template #footer>
            <Button icon="pi pi-check" label="Save" />
            <Button
              icon="pi pi-times"
              label="Cancel"
              class="p-button-secondary"
              style="margin-left: 0.5em"
            />
          </template>
        </Card>
      </div>
    </div>
  </Panel>
</template>
<style scoped>
.container {
  margin: auto;
  max-width: 960px;
  background-color: red;
}
</style>
<script>
import VideoPlayer from "../components/VideoPlayer.vue";

export default {
  name: "Content",
  components: {
    VideoPlayer,
  },
  props: {
    id: String,
  },
  data() {
    return {
      displayContent: false,
    };
  },
  watch: {},
  methods: {
    closeContent() {
      console.log("content closed");
      this.$router.push({ name: "home" });
    },
  },

  created() {},
  mounted() {},
};
</script>
