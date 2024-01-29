<template>
  <div id="app">
    <!-- Conteúdo da página -->
    <div id="content">
      <!-- Seu conteúdo atual aqui -->
    </div>

    <!-- Footer -->
    <div id="footer">
      <div class="footer-content">
        <!-- Seu conteúdo atual do footer aqui -->
      </div>
      <div class="footer-bar">
        <p> Zucarelli & Pedrini, 2024</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#content {
  /* Estilos para o conteúdo */
  flex: 1;
}

#footer {
  background-color: #3498db; /* Cor de fundo azul */
  color: white; /* Cor de texto branca */
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.footer-content {
  /* Estilos para o conteúdo do footer, se houver */
}

.footer-bar {
  margin-top: auto; /* Move o rodapé para a parte inferior */
  background-color: #3498db; /* Cor de fundo azul */
  color: white; /* Cor de texto branca */
  padding: 10px;
  text-align: center;
}
</style>
