import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '../views/HomePage.vue';
import BlocoAnotacoes from '../views/BlocoAnotacoes.vue';
import Notes from '../views/Notes.vue';
import EditNote from '../views/EditNote.vue';  

Vue.use(VueRouter);

const routes = [
  { path: '/HomePage', component: HomePage },
  { path: '/BlocoAnotacoes', component: BlocoAnotacoes },
  { path: '/Notes', component: Notes },
  { path: '/editar-nota/:id', name: 'editar-nota', component: EditNote },  
];


const router = new VueRouter({
  routes
});

export default router;
