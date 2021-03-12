<template>
  <h1>ac data view test</h1>
  <DataView :value="trends" >
    <template #list="slotProps">
      <div style="padding: 0.5em" class="p-col-12 p-md-3">
          Title: <b> {{ slotProps.data.Title }}</b>
      </div>
    </template>
  </DataView>
</template>

<script>
// @ is an alias to /src

import DataView from "primevue/dataview";
//import Dropdown from 'primevue/dropdown';

import DailyTrendService from "@/service/DailyTrendService.js";

export default {
  name: "MainList",
  components: {
    DataView,
  },
  data() {
    return {
      trends: null,
    };
  },
  trendService: null,
  created() {
    this.trendService = new DailyTrendService();
  },
  mounted() {
    this.trendService.getDefault().then((data) => {
      this.trends = data;
      console.log("data", data);
    });
  },
};
</script>
