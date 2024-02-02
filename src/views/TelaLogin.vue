<template>
  <v-container fluid class="login-container">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12" shaped>
          <v-card-title class="text-center">
            <h2 class="headline font-weight-bold">Sign In</h2>
          </v-card-title>

          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field
                v-model="username"
                label="Username"
                outlined
                dense
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                label="Password"
                outlined
                dense
                type="password"
                required
              ></v-text-field>

              <v-btn
                type="submit"
                color="#004d40" 
                class="white--text mx-auto mt-4"
                large
              >
                Sign In
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      // Adicione lógica de login aqui
      console.log('Sign in with:', this.username, this.password);
    },
  },
};
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-card {
  background-color: #fff;
  border-radius: 10px; 
  overflow: hidden;
}

.v-card-title h2 {
  color: #004d40; 
}

.v-btn {
  width: 100%;
}
</style>
