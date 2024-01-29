<template>
  <v-container>
    <h1>Editar Nota</h1>

    <v-form @submit.prevent="salvarEdicao">
      <v-text-field v-model="conteudo" label="Conteúdo da Nota" required></v-text-field>

      <v-btn type="submit" color="primary">Salvar Edição</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { getNote, updateNote } from "@/indexdb.js";

export default {
  data() {
    return {
      conteudo: "",
      idNota: null,
    };
  },
  methods: {
    async carregarNota() {
      this.idNota = this.$route.params.id;

      try {
        const nota = await getNote("notesDB", "notes", this.idNota);
        this.conteudo = nota.content;
      } catch (error) {
        console.error("Erro ao obter detalhes da nota do IndexedDB", error);
      }
    },
    async salvarEdicao() {
      try {
        await updateNote("notesDB", "notes", this.idNota, { content: this.conteudo });
        console.log("Nota atualizada com sucesso!");

        this.$router.push('/HomePage');
      } catch (error) {
        console.error("Erro ao salvar a edição da nota no IndexedDB", error);
      }
    },
  },
  created() {
    this.carregarNota();
  },
};
</script>

<style scoped>
</style>
