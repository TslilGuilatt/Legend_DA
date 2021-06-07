<template>
  <div id="home">
    <v-toolbar app dark color="#2f5d62" class="hidden-xs-and-down mb-12">
      <img src="../assets/logoPolice.png" />
      <v-toolbar-title>המח</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          v-for="item in nav"
          :key="item.icon"
          to="#"
          :title="item.title"
          flat
          >{{ item.text }}</v-btn
        >
      </v-toolbar-items>
    </v-toolbar>

    <v-toolbar app dark color="blue-grey darken-3" class="hidden-sm-and-up">
      <v-toolbar-title>Mobile Menu</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-toolbar-side-icon dark slot="activator"></v-toolbar-side-icon>
        <v-card>
          <v-toolbar flat color="blue-grey darken-2">
            <v-toolbar-title>Mobile Menu</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click.native="dialog = false">
              <v-icon>close</v-icon>
            </v-btn>
          </v-toolbar>

          <v-list>
            <v-list-tile v-for="(item, index) in nav" :key="index" to="#">
              <v-list-tile-action>
                <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title :title="item.title">{{
                  item.text
                }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-row justify="space-around">
      <security></security>
      <intelligence></intelligence>
    </v-row>
  </div>
</template>

<script>
import Security from "./Security";
import Intelligence from "./Intelligence";

export default {
  name: "Home",
  components: {
    Security,
    Intelligence
  }
};
</script>

<style scoped>
#home {
  background: url("../assets/homeBackground.jpg") no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  max-width: 100vw;
}

img {
  width: 2.5%;
  margin-left: 1%;
}
</style>
