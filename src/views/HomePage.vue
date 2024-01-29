<template>
  <div class="anotacoes-container">
    <v-container class="fill-height">
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12" md="8">
          <h1 class="text-center">Anotações</h1>
          <ul class="anotacoes-lista">
            <li v-for="(anotacao, index) in anotacoes" :key="index">{{ anotacao }}</li>
          </ul>
          <div class="botao-container text-center">
            <v-btn @click="navegarParaNovaPagina" color="blue darken-2" class="white--text">+ Criar Anotação</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    navegarParaNovaPagina() {
      this.$router.push('/BlocoAnotacoes');
    },
  },
  data() {
    return {
      anotacoes: [],
    };
  },
};
</script>

<style scoped>
.anotacoes-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  color: #000000;
}

.anotacoes-lista {
  list-style: none;
  padding: 0;
  margin: 15px 0;
}

li {
  background-color: #ecf0f1;
  padding: 10px;
  margin: 5px 0;
  border-radius: 4px;
}

.botao-container {
  margin-top: 20px;
}
</style>
