<template>
  <div>
    <header class="text-center mb-4">
      <h1 class="display-5 text-primary" style="margin-bottom: 0.5em;">Cálculo do Índice de Massa Corporal</h1>
    </header>

    <section class="mx-auto mt-5 p-4" style="max-width: 400px;">
      <div class="mb-3">
        <label for="txtname" class="form-label">Nome:</label>
        <input v-model="nome" type="text" class="form-control" id="txtname">
      </div>

      <div class="mb-3">
        <label for="txtaltura" class="form-label">Altura em centímetros:</label>
        <input v-model="altura" type="number" class="form-control" id="txtaltura" min="0">
      </div>

      <div class="mb-3">
        <label for="txtpeso" class="form-label">Peso:</label>
        <input v-model="peso" type="number" class="form-control" id="txtpeso" min="0">
      </div>

      <button @click="calcularIMC" class="btn btn-success btn-block">Verificar</button>
    </section>

    <div id="res" class="mt-4 text-center">
      <!-- Resultado será exibido aqui -->
      {{ resultado }}
    </div>
  </div>
</template>

<style scoped>
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  background-color: #f8f9fa; /* Cor de fundo */
}

section {
  background-color: #ffffff; /* Cor de fundo do formulário */
  padding: 20px;
  border-radius: 10px; /* Borda arredondada */
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1); /* Sombra */
}

#res {
  margin-top: 20px;
  text-align: center;
  color: #155724; /* Cor do texto */
  background-color: #d4edda; /* Cor de fundo do resultado */
  padding: 10px;
  border-radius: 5px; /* Borda arredondada */
}
</style>
