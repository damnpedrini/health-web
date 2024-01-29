<template>
    <div>
      <header class="text-center mb-4">
        <h1 class="display-4 text-primary">Cálculo do Índice de Massa Corporal</h1>
      </header>
  
      <section>
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
  
        <button @click="calcularIMC" class="btn btn-success">Verificar</button>
      </section>
  
      <div id="res" class="text-center">
        <!-- Resultado será exibido aqui -->
        {{ resultado }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name : 'CalculatorPage', 
    data() {
      return {
        nome: '',
        altura: null,
        peso: null,
        resultado: ''
      };
    },
    methods: {
      calcularIMC() {
        const alturaEmMetros = this.altura / 100;
        const peso = parseFloat(this.peso);
  
        const imc = peso / (alturaEmMetros * alturaEmMetros);
  
        let classificacao = 'Classificação não disponível';
  
        if (imc < 16) {
          classificacao = 'Baixo peso, muito grave';
        } else if (imc >= 16 && imc <= 16.99) {
          classificacao = 'Baixo peso grave';
        } else if (imc >= 17 && imc <= 18.49) {
          classificacao = 'Baixo peso';
        } else if (imc >= 18.50 && imc <= 24.99) {
          classificacao = 'Peso normal';
        } else if (imc >= 25 && imc <= 29.99) {
          classificacao = 'Sobrepeso';
        } else if (imc >= 30 && imc <= 34.99) {
          classificacao = 'Obesidade grau I';
        } else if (imc >= 35 && imc <= 39.99) {
          classificacao = 'Obesidade grau II';
        } else if (imc >= 40) {
          classificacao = 'Obesidade grau III';
        }
  
        this.resultado = `${this.nome} possui um IMC igual a ${imc.toFixed(2)}, sendo classificado como: ${classificacao}`;
      }
    }
  };
  </script>
  
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
    width: 400px;
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
  