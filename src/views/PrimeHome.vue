<template>
  
  <div>
    <a href="/id1/sample-description" @click="linkclick" onclick="return false;">test</a>
  </div>
<Dialog header="Header" v-model:visible="display" @hide="dialogClose">
  
	bu bir test kontenti
</Dialog>

</template>

<script>
// @ is an alias to /src


import Dialog from "primevue/dialog";

export default {
  name: "PrimeHome",
  components: {
    Dialog
  },
  props:{
    id:String,
  },
  data() {
    return {
      display:false,
    };
  },
  watch:{
    id(){
        this.updateId();
    }
  },
  methods:{
    linkclick(){
      console.log("link clicked",this.id);
      this.$router.push("/3");
    },
    updateId(){
      console.log("updateroute",this.id);
      this.display=this.id!=null;
    },
    dialogClose(){
      console.log("dialog closed",this.$route);
      this.$router.push({query:{sex:"k"}});

    }
  },
  
  created() {
  },
  mounted() {
    this.updateId();
  },
};
</script>
