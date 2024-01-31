<template>
  <v-container fluid class="home-page">
    <v-row align="center" justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-4 elevation-12">
          <h1 class="text-center mb-4">Bem-vindo ao Health Web</h1>

          <v-list>
            <v-list-item-group v-if="anotacoes.length > 0">
              <v-list-item v-for="(anotacao, index) in anotacoes" :key="index">
                <v-list-item-content>
                  <v-list-item-title>{{ anotacao.texto }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
            <v-list-item v-else>
              <v-list-item-content>
                <v-list-item-title class="text-center">Nenhuma refeição encontrada.</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-row class="mt-4" justify="center">
            <v-col class="text-center" style="color: white">
              <v-btn
                @click="navegarParaNovaPagina"
                color="#004d40"
                text-color="white"
                style="color: white"
              >
                + Criar uma nova refeição
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getAllNotes } from "@/indexdb.js"

export default {
  name: "HomePage",
  methods: {
    async navegarParaNovaPagina() {
    },
    async carregarAnotacoes() {
      this.anotacoes = await getAllNotes("seuDB", "seuStore");
    },
  },
  data() {
    return {
      anotacoes: [],
    };
  },
  async created() {
    await this.carregarAnotacoes();
  },
};
</script>

<style scoped>
.home-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  color: #004d40; 
}

.v-btn.primary {
  background-color: #004d40; 
}
</style>
