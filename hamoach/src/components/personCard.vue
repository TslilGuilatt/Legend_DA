<template>
  <div id="card">
    <v-card height="8vh" id="person">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-avatar>
              <v-img class=".rounded-circle" :src="image"></v-img>
            </v-avatar>
          </v-col>
          <v-col class="mt-3" cols="4">
            <v-row>
              <h4>{{ person.firstName }} {{ person.lastName }}</h4>
            </v-row>
            <v-row>
              {{ person.id }}
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
const defaultImg =
  "https://eitrawmaterials.eu/wp-content/uploads/2016/09/empty-avatar.jpg";

export default {
  name: "personCard",
  props: {
    person: {
      type: Object,
      required: true
    }
  },
  computed: {
    image() {
      let img = this.person.img;

      if (!img) {
        img = defaultImg;
      }

      return img;
    }
  }
};
</script>

<style scoped>
#card {
  direction: rtl;
  margin-top: 1vh;
  margin-bottom: 1vh;
}

#person {
  background-color: #a7c4bcc4;
}

h4 {
  color: rgba(0, 0, 0, 0.623);
}
</style>
