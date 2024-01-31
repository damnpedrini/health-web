<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6" class="text-center">
        <v-icon class="display-4 mb-4" color="success">mdi-heart-pulse</v-icon>
        <v-img src="@/assets/health-icon.png" alt="Health Icon" max-height="120"></v-img>
        <v-divider class="my-4"></v-divider>
        <div class="headline font-weight-bold" style="color: #2196F3;">Welcome to Health App</div>
        <v-btn class="mt-6" color="success" large to="/TelaLogin">Get Started</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "WelcomePage",
};
</script>

<style scoped>
/* Adicione estilos personalizados conforme necessário */
</style>
