<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  })
};
</script>

<style>
@font-face {
  font-family: "Main-font";
  src: url("./assets/VarelaRound-Regular.ttf");
}

#app {
  font-family: "Main-font";
}
</style>
