<template>
  <v-card
    class="text-center pt-12"
    height="45vh"
    width="30vw"
    id="intelligence"
  >
    <div class="mb-2">
      <h1>ציר מודיעיני</h1>
    </div>
    <v-btn-toggle class="mb-4" v-model="panelState" mandatory>
      <v-btn id="buttons" v-for="(state, index) in panelStates" :key="index">
        {{ state.name }}
      </v-btn>
    </v-btn-toggle>
    <v-list id="person_cards">
      <personCard
        class="mb-3 mx-4 text-start"
        v-for="person in persons"
        :key="person.id"
        :person="person"
      />
    </v-list>
  </v-card>
</template>

<script>
import personCard from "./personCard.vue";

export default {
  name: "Intelligence",
  components: {
    personCard
  },
  data() {
    return {
      suspects: [
        {
          id: "212413934",
          firstName: "דולב",
          lastName: "דולב",
          img:
            "https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/b2eac041-4dd9-4a0b-b92a-65dab57e987e"
        },
        { id: "028789063", firstName: "דולב", lastName: "דולב" }
      ],
      wanted: [
        { id: "212413934", firstName: "צליל", lastName: "דולב" },
        { id: "02fds934", firstName: "צליל", lastName: "דולב" },
        { id: "028fds89063", firstName: "מונפרד", lastName: "דולב" },
        { id: "212fdsfsd3934", firstName: "צליל", lastName: "דולב" },
        { id: "028fdsf9063", firstName: "מונפרד", lastName: "דולב" },
        { id: "212fff3934", firstName: "צליל", lastName: "דולב" },
        { id: "028dfsfs9063", firstName: "מונפרד", lastName: "דולב" },
        { id: "21fdsfdsfsd3934", firstName: "צליל", lastName: "דולב" },
        { id: "0287435345063", firstName: "מונפרד", lastName: "דולב" }
      ],
      panelStates: [
        { name: "חשודים", dataName: "suspects" },
        { name: "מבוקשים", dataName: "wanted" }
      ],
      panelState: 0
    };
  },
  computed: {
    persons() {
      return this[this.panelStates[this.panelState].dataName];
    }
  }
};
</script>

<style scoped>
#person_cards {
  height: 25vh;
  overflow-y: auto;
  background-color: #dfeeea;
  opacity: 0.95;
}

#intelligence {
  background-color: #dfeeea;
  opacity: 0.95;
}

h1 {
  color: #38919b;
}

#buttons {
  background-color: #dfeeea;
  opacity: 0.95;
}

v-btn:active {
  background-color: #a7c4bcc4;
}
</style>
