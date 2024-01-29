(function(){"use strict";var t={1493:function(t,n,o){o(752),o(3964),o(429),o(6409);var e=o(144),r=function(){var t=this,n=t._self._c;return n("div",[n("Navbar"),n("Footer")],1)},a=[],c=function(){var t=this,n=t._self._c;return n("v-app",[n("v-navigation-drawer",{attrs:{app:"",dark:"",color:"blue"},model:{value:t.drawer,callback:function(n){t.drawer=n},expression:"drawer"}},[n("v-list",[n("v-list-item",{staticClass:"nav-link",attrs:{to:"/HomePage"}},[t._v("Página Inicial")]),n("v-list-item",{staticClass:"nav-link",attrs:{to:"/Notes"}},[t._v("Anotações")]),n("v-list-item",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("Sobre")])],1)],1),n("v-app-bar",{attrs:{app:"",dark:"",color:"blue"}},[n("v-btn",{attrs:{icon:""},on:{click:function(n){t.drawer=!t.drawer}}},[n("v-icon",[t._v("mdi-menu")])],1),n("v-toolbar-title",{staticClass:"logo"},[t._v("Bloco de Anotações")])],1),n("v-main",[n("v-container",[n("router-view")],1)],1)],1)},i=[],s={name:"NavBar",data:function(){return{drawer:!1}}},u=s,l=o(1001),d=(0,l.Z)(u,c,i,!1,null,"11293336",null),v=d.exports,f=function(){var t=this;t._self._c;return t._m(0)},p=[function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"content"}}),n("div",{attrs:{id:"footer"}},[n("div",{staticClass:"footer-content"}),n("div",{staticClass:"footer-bar"},[n("p",[t._v("Criado por Rafael Alves Zucarelli")])])])])}],h={name:"App"},m=h,b=(0,l.Z)(m,f,p,!1,null,"3cbe2bd2",null),x=b.exports,w={components:{Navbar:v,Footer:x}},g=w,_=(0,l.Z)(g,r,a,!1,null,null,null),k=_.exports,Z=o(6017),E=o.n(Z);o(8556);e["default"].use(E());var N=new(E()),y=o(8345),C=function(){var t=this,n=t._self._c;return n("div",{staticClass:"anotacoes-container"},[n("v-container",{staticClass:"fill-height"},[n("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"8"}},[n("h1",{staticClass:"text-center"},[t._v("Anotações")]),n("ul",{staticClass:"anotacoes-lista"},t._l(t.anotacoes,(function(o,e){return n("li",{key:e},[t._v(t._s(o))])})),0),n("div",{staticClass:"botao-container text-center"},[n("v-btn",{staticClass:"white--text",attrs:{color:"blue darken-2"},on:{click:t.navegarParaNovaPagina}},[t._v("+ Criar Anotação")])],1)])],1)],1)],1)},P=[],A=(o(560),{name:"HomePage",methods:{navegarParaNovaPagina:function(){this.$router.push("/BlocoAnotacoes")}},data:function(){return{anotacoes:[]}}}),B=A,D=(0,l.Z)(B,C,P,!1,null,"da65af9e",null),j=D.exports,S=function(){var t=this,n=t._self._c;return n("v-app",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{label:"Bloco de Notas",outlined:"",rows:"10",solo:""},model:{value:t.nota,callback:function(n){t.nota=n},expression:"nota"}})],1)],1),n("v-row",[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("v-btn",{attrs:{color:"error"},on:{click:t.limparNota}},[t._v("Limpar")]),n("v-btn",{attrs:{color:"primary"},on:{click:t.salvarNota}},[t._v("Salvar")])],1)],1)],1)],1)},O=[],I=o(1907),T=o(5617),$=o(4452),H=(o(228),function(t,n){return new Promise((function(o,e){var r=indexedDB.open(t,1);r.onerror=function(){e("Erro ao abrir o banco de dados ".concat(t))},r.onupgradeneeded=function(t){var o=t.target.result;o.objectStoreNames.contains(n)||o.createObjectStore(n,{keyPath:"id",autoIncrement:!0})},r.onsuccess=function(t){var n=t.target.result;o(n)}}))}),z=function(t,n){return H(t,n).then((function(o){return new Promise((function(e,r){var a=o.transaction(n,"readonly"),c=a.objectStore(n),i=c.getAll();i.onerror=function(){r("Erro ao obter notas do banco de dados ".concat(t))},i.onsuccess=function(t){e(i.result)}}))}))},F=function(t,n,o){return H(t,n).then((function(e){return new Promise((function(r,a){var c=e.transaction(n,"readonly"),i=c.objectStore(n),s=i.get(o);s.onerror=function(){a("Erro ao obter nota do banco de dados ".concat(t))},s.onsuccess=function(t){r(s.result)}}))}))},M=function(t,n,o){return H(t,n).then((function(e){return new Promise((function(r,a){var c=e.transaction(n,"readwrite"),i=c.objectStore(n),s=i.add(o);s.onerror=function(){a("Erro ao adicionar nota ao banco de dados ".concat(t))},s.onsuccess=function(t){r(s.result)}}))}))},q=function(t,n,o,e){return H(t,n).then((function(r){return new Promise((function(a,c){var i=r.transaction(n,"readwrite"),s=i.objectStore(n),u=s.put((0,$.Z)((0,$.Z)({},e),{},{id:o}));u.onerror=function(){c("Erro ao atualizar nota no banco de dados ".concat(t))},u.onsuccess=function(t){a(u.result)}}))}))},L=function(t,n,o){return H(t,n).then((function(e){return new Promise((function(r,a){var c=e.transaction(n,"readwrite"),i=c.objectStore(n),s=i.delete(o);s.onerror=function(){a("Erro ao excluir nota do banco de dados ".concat(t))},s.onsuccess=function(t){r(s.result)}}))}))},R={name:"BlocoAnotacoes",data:function(){return{nota:"",dbName:"notesDB",storeName:"notes"}},methods:{limparNota:function(){this.nota=""},salvarNota:function(){var t=this;return(0,T.Z)((0,I.Z)().mark((function n(){var o;return(0,I.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o={content:t.nota},n.prev=1,n.next=4,M(t.dbName,t.storeName,o);case 4:console.log("Nota salva no IndexDB com sucesso!"),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](1),console.error("Erro ao salvar nota no IndexDB",n.t0);case 10:case"end":return n.stop()}}),n,null,[[1,7]])})))()}}},G=R,J=(0,l.Z)(G,S,O,!1,null,"04f87e68",null),K=J.exports,Q=function(){var t=this,n=t._self._c;return n("v-container",[n("h1",[t._v("Todas as Anotações")]),n("v-list",[t.anotacoes.length>0?n("v-list-item-group",t._l(t.anotacoes,(function(o,e){return n("v-list-item",{key:e},[n("v-list-item-content",{on:{click:function(n){return t.mostrarDetalhes(e)}}},[n("v-list-item-title",[t._v(t._s(o.content))])],1),n("v-list-item-action",[n("v-btn",{attrs:{icon:""},on:{click:function(n){return t.exibirDialogoExclusao(e)}}},[n("v-icon",[t._v("mdi-delete")])],1),n("v-btn",{attrs:{icon:""},on:{click:function(n){return t.editarAnotacao(e)}}},[n("v-icon",[t._v("mdi-pencil")])],1)],1)],1)})),1):n("v-list-item",[n("v-list-item-content",[t._v("Nenhuma anotação encontrada.")])],1)],1),n("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialogoExclusao,callback:function(n){t.dialogoExclusao=n},expression:"dialogoExclusao"}},[n("v-card",[n("v-card-title",[t._v("Confirmação")]),n("v-card-text",[t._v(" Tem certeza de que deseja excluir esta anotação? ")]),n("v-card-actions",[n("v-btn",{on:{click:function(n){t.dialogoExclusao=!1}}},[t._v("Cancelar")]),n("v-btn",{attrs:{color:"primary"},on:{click:t.confirmarExclusao}},[t._v("Confirmar")])],1)],1)],1),n("v-btn",{attrs:{color:"primary"},on:{click:t.criarNovaAnotacao}},[t._v("+ Criar Anotação")])],1)},U=[],V=(o(2506),{data:function(){return{anotacoes:[],dialogoExclusao:!1,indiceExclusao:null}},methods:{exibirDialogoExclusao:function(t){var n=this;return(0,T.Z)((0,I.Z)().mark((function o(){return(0,I.Z)().wrap((function(o){while(1)switch(o.prev=o.next){case 0:n.indiceExclusao=t,n.dialogoExclusao=!0;case 2:case"end":return o.stop()}}),o)})))()},confirmarExclusao:function(){var t=this;return(0,T.Z)((0,I.Z)().mark((function n(){var o,e;return(0,I.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=t.indiceExclusao,e=t.anotacoes[o],n.prev=2,n.next=5,L("notesDB","notes",e.id);case 5:console.log("Anotação excluída do IndexedDB com sucesso!"),t.anotacoes.splice(o,1),t.dialogoExclusao=!1,n.next=13;break;case 10:n.prev=10,n.t0=n["catch"](2),console.error("Erro ao excluir anotação do IndexedDB",n.t0);case 13:case"end":return n.stop()}}),n,null,[[2,10]])})))()},mostrarDetalhes:function(t){var n=this;return(0,T.Z)((0,I.Z)().mark((function o(){var e;return(0,I.Z)().wrap((function(o){while(1)switch(o.prev=o.next){case 0:e=n.anotacoes[t].content,console.log("Detalhes da Anotação:",e),n.$router.push("/notas-salvas");case 3:case"end":return o.stop()}}),o)})))()},editarAnotacao:function(t){var n=this.anotacoes[t].id;this.$router.push({name:"editar-nota",params:{id:n}})},criarNovaAnotacao:function(){var t=this;return(0,T.Z)((0,I.Z)().mark((function n(){return(0,I.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.$router.push("/BlocoAnotacoes");case 1:case"end":return n.stop()}}),n)})))()},carregarAnotacoes:function(){var t=this;return(0,T.Z)((0,I.Z)().mark((function n(){var o;return(0,I.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,z("notesDB","notes");case 3:o=n.sent,t.anotacoes=o,n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),console.error("Erro ao obter anotações do IndexedDB",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}},created:function(){this.carregarAnotacoes()}}),W=V,X=(0,l.Z)(W,Q,U,!1,null,"51257667",null),Y=X.exports,tt=function(){var t=this,n=t._self._c;return n("v-container",[n("h1",[t._v("Editar Nota")]),n("v-form",{on:{submit:function(n){return n.preventDefault(),t.salvarEdicao.apply(null,arguments)}}},[n("v-text-field",{attrs:{label:"Conteúdo da Nota",required:""},model:{value:t.conteudo,callback:function(n){t.conteudo=n},expression:"conteudo"}}),n("v-btn",{attrs:{type:"submit",color:"primary"}},[t._v("Salvar Edição")])],1)],1)},nt=[],ot={data:function(){return{conteudo:"",idNota:null}},methods:{carregarNota:function(){var t=this;return(0,T.Z)((0,I.Z)().mark((function n(){var o;return(0,I.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.idNota=t.$route.params.id,n.prev=1,n.next=4,F("notesDB","notes",t.idNota);case 4:o=n.sent,t.conteudo=o.content,n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](1),console.error("Erro ao obter detalhes da nota do IndexedDB",n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()},salvarEdicao:function(){var t=this;return(0,T.Z)((0,I.Z)().mark((function n(){return(0,I.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,q("notesDB","notes",t.idNota,{content:t.conteudo});case 3:console.log("Nota atualizada com sucesso!"),t.$router.push("/HomePage"),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),console.error("Erro ao salvar a edição da nota no IndexedDB",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}},created:function(){this.carregarNota()}},et=ot,rt=(0,l.Z)(et,tt,nt,!1,null,"01f28578",null),at=rt.exports;e["default"].use(y.ZP);var ct=[{path:"/HomePage",component:j},{path:"/BlocoAnotacoes",component:K},{path:"/Notes",component:Y},{path:"/editar-nota/:id",name:"editar-nota",component:at}],it=new y.ZP({routes:ct}),st=it;e["default"].config.productionTip=!1,e["default"].use(y.ZP),new e["default"]({vuetify:N,router:st,render:function(t){return t(k)}}).$mount("#app")}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}o.m=t,function(){var t=[];o.O=function(n,e,r,a){if(!e){var c=1/0;for(l=0;l<t.length;l++){e=t[l][0],r=t[l][1],a=t[l][2];for(var i=!0,s=0;s<e.length;s++)(!1&a||c>=a)&&Object.keys(o.O).every((function(t){return o.O[t](e[s])}))?e.splice(s--,1):(i=!1,a<c&&(c=a));if(i){t.splice(l--,1);var u=r();void 0!==u&&(n=u)}}return n}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[e,r,a]}}(),function(){o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,{a:n}),n}}(),function(){o.d=function(t,n){for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};o.O.j=function(n){return 0===t[n]};var n=function(n,e){var r,a,c=e[0],i=e[1],s=e[2],u=0;if(c.some((function(n){return 0!==t[n]}))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(s)var l=s(o)}for(n&&n(e);u<c.length;u++)a=c[u],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(l)},e=self["webpackChunkbloco_anotacoes"]=self["webpackChunkbloco_anotacoes"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=o.O(void 0,[998],(function(){return o(1493)}));e=o.O(e)})();
//# sourceMappingURL=app-legacy.02bdfb42.js.map