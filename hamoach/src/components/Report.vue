<template>
  <div>
    <v-card height="8vh" id="report">
      <h4 class="pt-6">
        {{ data.ev_time }} {{ data.ev_type }} ב{{ data.ev_loc }}
      </h4>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "report",
  props: {
    data: Object
  }
};
</script>

<style scoped>
#report {
  background-color: #a7c4bcc4;
}

h4 {
  padding-right: 1.5%;
  color: rgba(0, 0, 0, 0.623);
  opacity: 1;
}
</style>
