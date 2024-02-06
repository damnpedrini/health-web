<!-- src/components/NavBar.vue -->

<template>
  <v-app>
    <!-- Menu lateral -->
    <v-navigation-drawer app dark color="#004d40" v-model="drawer">
      <v-list>
        <v-list-item to="/HomePage" class="nav-link">Página Inicial</v-list-item>
        <v-list-item to="/Notes" class="nav-link">Anotações</v-list-item>
        <v-list-item to="/CalculatorPage" class="nav-link">Calculadora</v-list-item>
        <!-- Adicione outros links conforme necessário -->
      </v-list>
    </v-navigation-drawer>

    <!-- Botão para abrir o menu lateral -->
    <v-app-bar app dark color="#004d40">
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-toolbar-title class="logo">
        <i class="fa-solid fa-heart-pulse"></i> Health Web
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- Botão de Notificações -->
      <v-dialog v-model="showNotificationsDialog" max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" @click="mostrarNotificacao">
            <v-icon>mdi-bell</v-icon>
          </v-btn>
        </template>
        
        <v-card>
          <v-card-title>Notificações</v-card-title>
          <!-- Adicione aqui o conteúdo das notificações -->
          <!-- Exemplo: <v-card-text>{{ notificacoes }}</v-card-text> -->
          <v-card-actions>
            <v-btn @click="fecharDialog">Fechar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NotificacoesService from '@/services/notificacoesService'; // Ajuste o caminho conforme necessário

export default {
  name: "NavBar",
  data() {
    return {
      drawer: false,
      showNotificationsDialog: false,
    };
  },
  methods: {
    fecharDialog() {
      this.showNotificationsDialog = false;
    },
    mostrarNotificacao() {
      // Suponha que você tenha um estado ou variável que rastreia a quantidade consumida e a meta (2 litros).
      const quantidadeConsumida = 1500; // Substitua pelo valor real consumido
      const metaDiaria = 2000;

      const quantidadeRestante = metaDiaria - quantidadeConsumida;
      NotificacoesService.incentivarConsumoAgua(quantidadeRestante);

      this.showNotificationsDialog = false; // Fechar o popup após acionar a notificação
    },
  },
};
</script>

<style scoped>
.logo {
  color: white;
  font-size: 1.5em;
}

/* Adicione outros estilos conforme necessário */

.nav-link.router-link-active {
  background-color: #555;
  font-weight: bold;
}

.v-main {
  padding-left: 300px; 
}
</style>
