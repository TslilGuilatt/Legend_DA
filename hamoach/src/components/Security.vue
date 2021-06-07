<template>
  <div>
    <v-card class="mx-auto " width="30vw" height="45vh" id="security">
      <v-col cols="2">
        <v-btn class="button" icon>
          <v-icon medium>mdi-calendar</v-icon>
        </v-btn>
        <v-btn icon class="button">
          <v-icon medium>mdi-map</v-icon>
        </v-btn></v-col
      >
      <v-row justify="center">
        <h1>ציר אבטחתי</h1>
      </v-row>

      <v-row align="center">
        <v-col class="d-flex mx-auto" cols="12" sm="6">
          <v-select :items="items" label="אזור מוצג"></v-select>
        </v-col>
      </v-row>
      <v-list id="reports">
        <report
          class="mx-4 mb-3"
          id="line"
          v-for="(report, index) in reports"
          :key="index"
          :data="report"
        ></report
      ></v-list>
    </v-card>
  </div>
</template>

<script>
import Report from "./Report";
import api from "../api";

export default {
  name: "Security",
  components: {
    Report
  },
  created() {
    this.getReports();
  },
  data() {
    return {
      items: ["ברונקס", "ברוקלין", "מנהטן", "קווינס", "סטטן איילנד"],
      reports: []
    };
  },
  methods: {
    getReports() {
      api.reports.allReports().then(res => {
        this.reports = res.data;
      });
    }
  }
};
</script>

<style scoped>
#reports {
  height: 25vh;
  overflow-y: auto;
  background-color: #dfeeea;
  opacity: 0.95;
}

#security {
  background-color: #dfeeea;

  opacity: 0.95;
}

#line {
  margin-bottom: 2%;
}

h1 {
  color: #38919b;
}

.button {
  color: #a7c4bcc4;
}

#title {
  height: 10vh;
}
</style>
