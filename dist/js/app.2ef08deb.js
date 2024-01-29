(function(){"use strict";var t={1493:function(t,o,a){var e=a(144),n=function(){var t=this,o=t._self._c;return o("div",[o("Navbar"),o("Footer")],1)},r=[],s=function(){var t=this,o=t._self._c;return o("v-app",[o("v-navigation-drawer",{attrs:{app:"",dark:"",color:"blue"},model:{value:t.drawer,callback:function(o){t.drawer=o},expression:"drawer"}},[o("v-list",[o("v-list-item",{staticClass:"nav-link",attrs:{to:"/HomePage"}},[t._v("Página Inicial")]),o("v-list-item",{staticClass:"nav-link",attrs:{to:"/Notes"}},[t._v("Anotações")]),o("v-list-item",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("Sobre")])],1)],1),o("v-app-bar",{attrs:{app:"",dark:"",color:"blue"}},[o("v-btn",{attrs:{icon:""},on:{click:function(o){t.drawer=!t.drawer}}},[o("v-icon",[t._v("mdi-menu")])],1),o("v-toolbar-title",{staticClass:"logo"},[t._v("Bloco de Anotações")])],1),o("v-main",[o("v-container",[o("router-view")],1)],1)],1)},c=[],i={name:"NavBar",data(){return{drawer:!1}}},l=i,u=a(1001),d=(0,u.Z)(l,s,c,!1,null,"11293336",null),v=d.exports,f=function(){var t=this;t._self._c;return t._m(0)},h=[function(){var t=this,o=t._self._c;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"content"}}),o("div",{attrs:{id:"footer"}},[o("div",{staticClass:"footer-content"}),o("div",{staticClass:"footer-bar"},[o("p",[t._v("Criado por Rafael Alves Zucarelli")])])])])}],m={name:"App"},p=m,b=(0,u.Z)(p,f,h,!1,null,"3cbe2bd2",null),g=b.exports,x={components:{Navbar:v,Footer:g}},_=x,y=(0,u.Z)(_,n,r,!1,null,null,null),w=y.exports,E=a(6017),N=a.n(E);a(8556);e["default"].use(N());var k=new(N()),C=a(8345),P=function(){var t=this,o=t._self._c;return o("div",{staticClass:"anotacoes-container"},[o("v-container",{staticClass:"fill-height"},[o("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[o("v-col",{attrs:{cols:"12",md:"8"}},[o("h1",{staticClass:"text-center"},[t._v("Anotações")]),o("ul",{staticClass:"anotacoes-lista"},t._l(t.anotacoes,(function(a,e){return o("li",{key:e},[t._v(t._s(a))])})),0),o("div",{staticClass:"botao-container text-center"},[o("v-btn",{staticClass:"white--text",attrs:{color:"blue darken-2"},on:{click:t.navegarParaNovaPagina}},[t._v("+ Criar Anotação")])],1)])],1)],1)],1)},A=[],B=(a(560),{name:"HomePage",methods:{navegarParaNovaPagina(){this.$router.push("/BlocoAnotacoes")}},data(){return{anotacoes:[]}}}),D=B,j=(0,u.Z)(D,P,A,!1,null,"da65af9e",null),S=j.exports,O=function(){var t=this,o=t._self._c;return o("v-app",[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-textarea",{attrs:{label:"Bloco de Notas",outlined:"",rows:"10",solo:""},model:{value:t.nota,callback:function(o){t.nota=o},expression:"nota"}})],1)],1),o("v-row",[o("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[o("v-btn",{attrs:{color:"error"},on:{click:t.limparNota}},[t._v("Limpar")]),o("v-btn",{attrs:{color:"primary"},on:{click:t.salvarNota}},[t._v("Salvar")])],1)],1)],1)],1)},$=[];const Z=(t,o)=>new Promise(((a,e)=>{const n=indexedDB.open(t,1);n.onerror=()=>{e(`Erro ao abrir o banco de dados ${t}`)},n.onupgradeneeded=t=>{const a=t.target.result;a.objectStoreNames.contains(o)||a.createObjectStore(o,{keyPath:"id",autoIncrement:!0})},n.onsuccess=t=>{const o=t.target.result;a(o)}})),I=(t,o)=>Z(t,o).then((a=>new Promise(((e,n)=>{const r=a.transaction(o,"readonly"),s=r.objectStore(o),c=s.getAll();c.onerror=()=>{n(`Erro ao obter notas do banco de dados ${t}`)},c.onsuccess=t=>{e(c.result)}})))),T=(t,o,a)=>Z(t,o).then((e=>new Promise(((n,r)=>{const s=e.transaction(o,"readonly"),c=s.objectStore(o),i=c.get(a);i.onerror=()=>{r(`Erro ao obter nota do banco de dados ${t}`)},i.onsuccess=t=>{n(i.result)}})))),H=(t,o,a)=>Z(t,o).then((e=>new Promise(((n,r)=>{const s=e.transaction(o,"readwrite"),c=s.objectStore(o),i=c.add(a);i.onerror=()=>{r(`Erro ao adicionar nota ao banco de dados ${t}`)},i.onsuccess=t=>{n(i.result)}})))),z=(t,o,a,e)=>Z(t,o).then((n=>new Promise(((r,s)=>{const c=n.transaction(o,"readwrite"),i=c.objectStore(o),l=i.put({...e,id:a});l.onerror=()=>{s(`Erro ao atualizar nota no banco de dados ${t}`)},l.onsuccess=t=>{r(l.result)}})))),F=(t,o,a)=>Z(t,o).then((e=>new Promise(((n,r)=>{const s=e.transaction(o,"readwrite"),c=s.objectStore(o),i=c.delete(a);i.onerror=()=>{r(`Erro ao excluir nota do banco de dados ${t}`)},i.onsuccess=t=>{n(i.result)}}))));var M={name:"BlocoAnotacoes",data(){return{nota:"",dbName:"notesDB",storeName:"notes"}},methods:{limparNota(){this.nota=""},async salvarNota(){const t={content:this.nota};try{await H(this.dbName,this.storeName,t),console.log("Nota salva no IndexDB com sucesso!")}catch(o){console.error("Erro ao salvar nota no IndexDB",o)}}}},q=M,L=(0,u.Z)(q,O,$,!1,null,"04f87e68",null),R=L.exports,G=function(){var t=this,o=t._self._c;return o("v-container",[o("h1",[t._v("Todas as Anotações")]),o("v-list",[t.anotacoes.length>0?o("v-list-item-group",t._l(t.anotacoes,(function(a,e){return o("v-list-item",{key:e},[o("v-list-item-content",{on:{click:function(o){return t.mostrarDetalhes(e)}}},[o("v-list-item-title",[t._v(t._s(a.content))])],1),o("v-list-item-action",[o("v-btn",{attrs:{icon:""},on:{click:function(o){return t.exibirDialogoExclusao(e)}}},[o("v-icon",[t._v("mdi-delete")])],1),o("v-btn",{attrs:{icon:""},on:{click:function(o){return t.editarAnotacao(e)}}},[o("v-icon",[t._v("mdi-pencil")])],1)],1)],1)})),1):o("v-list-item",[o("v-list-item-content",[t._v("Nenhuma anotação encontrada.")])],1)],1),o("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialogoExclusao,callback:function(o){t.dialogoExclusao=o},expression:"dialogoExclusao"}},[o("v-card",[o("v-card-title",[t._v("Confirmação")]),o("v-card-text",[t._v(" Tem certeza de que deseja excluir esta anotação? ")]),o("v-card-actions",[o("v-btn",{on:{click:function(o){t.dialogoExclusao=!1}}},[t._v("Cancelar")]),o("v-btn",{attrs:{color:"primary"},on:{click:t.confirmarExclusao}},[t._v("Confirmar")])],1)],1)],1),o("v-btn",{attrs:{color:"primary"},on:{click:t.criarNovaAnotacao}},[t._v("+ Criar Anotação")])],1)},J=[],K={data(){return{anotacoes:[],dialogoExclusao:!1,indiceExclusao:null}},methods:{async exibirDialogoExclusao(t){this.indiceExclusao=t,this.dialogoExclusao=!0},async confirmarExclusao(){const t=this.indiceExclusao,o=this.anotacoes[t];try{await F("notesDB","notes",o.id),console.log("Anotação excluída do IndexedDB com sucesso!"),this.anotacoes.splice(t,1),this.dialogoExclusao=!1}catch(a){console.error("Erro ao excluir anotação do IndexedDB",a)}},async mostrarDetalhes(t){const o=this.anotacoes[t].content;console.log("Detalhes da Anotação:",o),this.$router.push("/notas-salvas")},editarAnotacao(t){const o=this.anotacoes[t].id;this.$router.push({name:"editar-nota",params:{id:o}})},async criarNovaAnotacao(){this.$router.push("/BlocoAnotacoes")},async carregarAnotacoes(){try{const t=await I("notesDB","notes");this.anotacoes=t}catch(t){console.error("Erro ao obter anotações do IndexedDB",t)}}},created(){this.carregarAnotacoes()}},Q=K,U=(0,u.Z)(Q,G,J,!1,null,"51257667",null),V=U.exports,W=function(){var t=this,o=t._self._c;return o("v-container",[o("h1",[t._v("Editar Nota")]),o("v-form",{on:{submit:function(o){return o.preventDefault(),t.salvarEdicao.apply(null,arguments)}}},[o("v-text-field",{attrs:{label:"Conteúdo da Nota",required:""},model:{value:t.conteudo,callback:function(o){t.conteudo=o},expression:"conteudo"}}),o("v-btn",{attrs:{type:"submit",color:"primary"}},[t._v("Salvar Edição")])],1)],1)},X=[],Y={data(){return{conteudo:"",idNota:null}},methods:{async carregarNota(){this.idNota=this.$route.params.id;try{const t=await T("notesDB","notes",this.idNota);this.conteudo=t.content}catch(t){console.error("Erro ao obter detalhes da nota do IndexedDB",t)}},async salvarEdicao(){try{await z("notesDB","notes",this.idNota,{content:this.conteudo}),console.log("Nota atualizada com sucesso!"),this.$router.push("/HomePage")}catch(t){console.error("Erro ao salvar a edição da nota no IndexedDB",t)}}},created(){this.carregarNota()}},tt=Y,ot=(0,u.Z)(tt,W,X,!1,null,"01f28578",null),at=ot.exports;e["default"].use(C.ZP);const et=[{path:"/HomePage",component:S},{path:"/BlocoAnotacoes",component:R},{path:"/Notes",component:V},{path:"/editar-nota/:id",name:"editar-nota",component:at}],nt=new C.ZP({routes:et});var rt=nt;e["default"].config.productionTip=!1,e["default"].use(C.ZP),new e["default"]({vuetify:k,router:rt,render:t=>t(w)}).$mount("#app")}},o={};function a(e){var n=o[e];if(void 0!==n)return n.exports;var r=o[e]={exports:{}};return t[e].call(r.exports,r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(o,e,n,r){if(!e){var s=1/0;for(u=0;u<t.length;u++){e=t[u][0],n=t[u][1],r=t[u][2];for(var c=!0,i=0;i<e.length;i++)(!1&r||s>=r)&&Object.keys(a.O).every((function(t){return a.O[t](e[i])}))?e.splice(i--,1):(c=!1,r<s&&(s=r));if(c){t.splice(u--,1);var l=n();void 0!==l&&(o=l)}}return o}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[e,n,r]}}(),function(){a.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(o,{a:o}),o}}(),function(){a.d=function(t,o){for(var e in o)a.o(o,e)&&!a.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:o[e]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(o){return 0===t[o]};var o=function(o,e){var n,r,s=e[0],c=e[1],i=e[2],l=0;if(s.some((function(o){return 0!==t[o]}))){for(n in c)a.o(c,n)&&(a.m[n]=c[n]);if(i)var u=i(a)}for(o&&o(e);l<s.length;l++)r=s[l],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(u)},e=self["webpackChunkbloco_anotacoes"]=self["webpackChunkbloco_anotacoes"]||[];e.forEach(o.bind(null,0)),e.push=o.bind(null,e.push.bind(e))}();var e=a.O(void 0,[998],(function(){return a(1493)}));e=a.O(e)})();
//# sourceMappingURL=app.2ef08deb.js.map