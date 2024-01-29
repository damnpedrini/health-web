<template>
  <v-container>
    <h1>Todas as Anotações</h1>

    <v-list>
      <v-list-item-group v-if="anotacoes.length > 0">
        <v-list-item v-for="(anotacao, index) in anotacoes" :key="index">
          <v-list-item-content @click="mostrarDetalhes(index)">
            <v-list-item-title>{{ anotacao.content }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon @click="exibirDialogoExclusao(index)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
            <v-btn icon @click="editarAnotacao(index)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list-item-group>
      <v-list-item v-else>
        <v-list-item-content>Nenhuma anotação encontrada.</v-list-item-content>
      </v-list-item>
    </v-list>

    <v-dialog v-model="dialogoExclusao" max-width="500">
      <v-card>
        <v-card-title>Confirmação</v-card-title>
        <v-card-text>
          Tem certeza de que deseja excluir esta anotação?
        </v-card-text>
        <v-card-actions>
          <v-btn @click="dialogoExclusao = false">Cancelar</v-btn>
          <v-btn @click="confirmarExclusao" color="primary">Confirmar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-btn @click="criarNovaAnotacao" color="primary">+ Criar Anotação</v-btn>
  </v-container>
</template>

<script>
import { getAllNotes, deleteNote } from "@/indexdb.js";

export default {
  data() {
    return {
      anotacoes: [], 
      dialogoExclusao: false,
      indiceExclusao: null, 
    };
  },
  methods: {
    async exibirDialogoExclusao(index) {
      this.indiceExclusao = index;
      this.dialogoExclusao = true;
    },
    async confirmarExclusao() {
      const index = this.indiceExclusao;
      const anotacaoParaExcluir = this.anotacoes[index];

      try {
        await deleteNote("notesDB", "notes", anotacaoParaExcluir.id);
        console.log("Anotação excluída do IndexedDB com sucesso!");

        this.anotacoes.splice(index, 1);

        this.dialogoExclusao = false;
      } catch (error) {
        console.error("Erro ao excluir anotação do IndexedDB", error);
      }
    },
    async mostrarDetalhes(index) {
      const detalhes = this.anotacoes[index].content;
      console.log('Detalhes da Anotação:', detalhes);

      this.$router.push('/notas-salvas');
    },
    editarAnotacao(index) {
      const notaId = this.anotacoes[index].id;

      this.$router.push({ name: 'editar-nota', params: { id: notaId } });
    },
    async criarNovaAnotacao() {
      this.$router.push('/BlocoAnotacoes'); 
    },
    async carregarAnotacoes() {
      try {
        const notes = await getAllNotes("notesDB", "notes");
        this.anotacoes = notes;
      } catch (error) {
        console.error("Erro ao obter anotações do IndexedDB", error);
      }
    },
  },
  created() {
    this.carregarAnotacoes();
  },
};
</script>

<style scoped>
</style>
