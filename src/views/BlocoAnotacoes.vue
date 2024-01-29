<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-textarea
            v-model="nota"
            label="Bloco de Notas"
            outlined
            rows="10"
            solo
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="text-center">
          <v-btn @click="limparNota" color="error">Limpar</v-btn>
          <v-btn @click="salvarNota" color="primary">Salvar</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { addNote } from "@/indexdb.js";

export default {
  name: "BlocoAnotacoes",
  data() {
    return {
      nota: "", 
      dbName: "notesDB", 
      storeName: "notes", 
    };
  },
  methods: {
    limparNota() {
      this.nota = "";
    },
    async salvarNota() {
      const note = { content: this.nota }; 
      try {
        await addNote(this.dbName, this.storeName, note);
        console.log("Nota salva no IndexDB com sucesso!");
      } catch (error) {
        console.error("Erro ao salvar nota no IndexDB", error);
      }
    },
   
  },
};
</script>

<style scoped>

</style>
