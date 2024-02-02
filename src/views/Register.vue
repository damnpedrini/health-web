<template>
  <v-container fluid class="register-container">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12" shaped>
          <v-card-title class="text-center">
            <h1 class="headline font-weight-bold">Sign Up</h1>
          </v-card-title>

          <v-card-text>
            <v-form @submit.prevent="registerUser">
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="username" label="Username" outlined dense required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="email" label="Email" type="email" outlined dense required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="password" label="Password" type="password" outlined dense required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-btn type="submit" color="#004d40" class="white--text mx-auto mt-4">
                    Sign Up
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
            <div v-if="isRegistered" class="success-message">
              <p>Registration successful for {{ username }}!</p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      isRegistered: false,
    };
  },
  methods: {
    registerUser() {
      // Lógica de registro aqui (por exemplo, enviar dados para o backend)
      // Neste exemplo, apenas exibimos uma mensagem de sucesso
      this.isRegistered = true;
    },
  },
};
</script>

<style scoped>
.register-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.success-message {
  margin-top: 20px;
  text-align: center;
  color: #004d40; /* Cor verde para indicar sucesso */
}

.v-text-field {
  width: 100%;
}

.v-btn {
  width: 100%;
  border-radius: 5px;
}

.v-btn:hover {
  text-decoration: underline;
}
</style>
