<template>
  <v-container class="login">
    <v-card
      class="mx-auto py-16 mt-16 transp font size rounded-xl"
      height="75vh"
      color="#dfeeea"
      align="center"
      justify="center"
      light
      max-width="75vw"
    >
      <v-row justify="space-around">
        <v-col cols="8">
          <v-card-title class="justify-center">
            <h1 class="font-weight-bold font size">ברוכים הבאים</h1>
          </v-card-title>

          <v-card-text class="text-h5 font-weight-bold font size">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="username"
                :rules="[valid => !!valid || 'חובה להזין שם משתמש']"
                label="שם משתמש"
                required
                class="my-6 mx-16 font"
              ></v-text-field>

              <v-text-field
                v-model="password"
                :rules="[valid => !!valid || 'חובה להזין סיסמה']"
                label="סיסמה"
                :type="show1 ? 'text' : 'password'"
                class="my-6 mx-16 font"
                required
              ></v-text-field>
              <v-btn
                @click="validate"
                :disabled="!valid"
                class="font"
                elevation="5"
                outlined
                rounded
                x-large
                >כניסה <router-link v-if="trueInput" exact> </router-link
              ></v-btn>
            </v-form>
            <p v-if="wrongInput" class="font alert mt-6">
              פרטי ההתחברות לא נכונים, נסה שוב
            </p>
          </v-card-text>
        </v-col>
        <img
          src="../assets/logoPolice.png"
          width="300vh"
          height="360vh"
          class="ml-16"
        />
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import api from "../api.js";

export default {
  data: () => ({
    valid: false,
    trueInput: false,
    wrongInput: false
  }),

  methods: {
    async validate() {
      await api.users
        .login(this.username, this.password)
        .then(response => {
          this.trueInput = true;
          console.log(response);
        })
        .catch(error => {
          this.wrongInput = true;
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.font {
  font-family: "Main-font";
  color: #38919b;
}

.alert {
  font-size: 2vh;
  color: red;
}

.login {
  background: url("../assets/background.jpg") no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  max-width: 100vw;
}

.transp {
  opacity: 0.95;
}

.size {
  font-size: 8vh;
}
</style>
