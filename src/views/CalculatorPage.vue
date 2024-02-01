<template>
  <div>
    <header class="text-center mb-4">
      <h1 class="display-5 text-primary" style="margin-bottom: 0.5em;">Cálculo do Índice de Massa Corporal</h1>
    </header>

    <section class="mx-auto mt-5 p-4" style="max-width: 400px; text-align: center;">
      <div class="mb-3">
        <label for="txtaltura" class="form-label">Altura:</label>
        <input v-model="altura" @input="formatarAltura" type="text" class="form-control" id="txtaltura">
      </div>

      <div class="mb-3">
        <label for="txtpeso" class="form-label">Peso:</label>
        <input v-model="peso" type="number" class="form-control" id="txtpeso" min="0">
      </div>

      <button @click="calcularIMC" class="btn btn-success">Verificar</button>
    </section>

    <div id="res" class="mt-4 text-center">
      {{ resultado }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      altura: "",
      peso: 0,
      resultado: "",
    };
  },
  methods: {
    calcularIMC() {
      const alturaMetros = this.converterAlturaParaMetros(this.altura);
      const imc = this.peso / (alturaMetros * alturaMetros);

      if (imc < 18.5) {
        this.resultado = `Seu IMC é ${imc.toFixed(2)}, você está abaixo do peso.`;
      } else if (imc < 25) {
        this.resultado = `Seu IMC é ${imc.toFixed(2)}, seu peso está normal.`;
      } else if (imc < 30) {
        this.resultado = `Seu IMC é ${imc.toFixed(2)}, você está acima do peso.`;
      } else {
        this.resultado = `Seu IMC é ${imc.toFixed(2)}, você está obeso.`;
      }
    },
    converterAlturaParaMetros(altura) {
      const partesAltura = altura.split(",");
      const metros = parseFloat(partesAltura[0]);
      const centimetros = partesAltura[1] ? parseFloat(partesAltura[1]) : 0;

      return metros + centimetros / 100;
    },
    formatarAltura() {
      if (this.altura.length === 1 && !this.altura.includes(',')) {
        this.altura += ",";
      }
    },
  },
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
  background-color: #f8f9fa;
}

section {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
}

#res {
  margin-top: 20px;
  text-align: center;
  color: #155724;
  background-color: #d4edda;
  padding: 10px;
  border-radius: 5px;
}

.btn-success {
  background-color: #004d40;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-success:hover {
  background-color: #45a049;
}
</style>
