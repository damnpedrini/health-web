<template>
    <v-container>
      <h1>Registro</h1>
      <form @submit.prevent="registerUser">
        <v-text-field v-model="username" label="Nome de Usuário" required></v-text-field>
        <v-text-field v-model="email" label="E-mail" type="email" required></v-text-field>
        <v-text-field v-model="password" label="Senha" type="password" required></v-text-field>
        <v-btn type="submit" class="custom-btn">Registrar</v-btn>
      </form>
      <div v-if="isRegistered">
        <p>Registro concluído com sucesso para {{ username }}!</p>
      </div>
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
  .custom-btn {
    color: white;
    background-color: #004d40;
    font-family: 'YourDesiredFont', sans-serif; /* Substitua 'YourDesiredFont' pela fonte desejada */
    font-size: 16px; /* Ajuste o tamanho da fonte conforme necessário */
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .custom-btn:hover {
    background-color: #003229;
    text-decoration: underline;
  }
  </style>
  