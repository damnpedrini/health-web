// src/services/notificacoesService.js

export default {
    incentivarConsumoAgua(quantidadeRestante) {
      if ('Notification' in window) {
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            const mensagem = `Health Web diz: Vamos tomar água! Faltam ${quantidadeRestante} copos agora.`;
  
            new Notification('Lembrete de Água', {
              body: mensagem,
            });
          }
        });
      }
    },
  };
  