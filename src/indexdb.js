/* eslint-disable */

const openDB = (dbName, storeName) => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, 1);

    request.onerror = () => {
      reject(`Erro ao abrir o banco de dados ${dbName}`);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: "id", autoIncrement: true });
      }
    };

    request.onsuccess = (event) => {
      const db = event.target.result;
      resolve(db);
    };
  });
};

const getAllNotes = (dbName, storeName) => {
  return openDB(dbName, storeName).then((db) => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readonly");
      const store = transaction.objectStore(storeName);

      const request = store.getAll();

      request.onerror = () => {
        reject(`Erro ao obter notas do banco de dados ${dbName}`);
      };

      request.onsuccess = (event) => {
        resolve(request.result);
      };
    });
  });
};

const getNote = (dbName, storeName, noteId) => {
  return openDB(dbName, storeName).then((db) => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readonly");
      const store = transaction.objectStore(storeName);

      const request = store.get(noteId);

      request.onerror = () => {
        reject(`Erro ao obter nota do banco de dados ${dbName}`);
      };

      request.onsuccess = (event) => {
        resolve(request.result);
      };
    });
  });
};

const addNote = (dbName, storeName, note) => {
  return openDB(dbName, storeName).then((db) => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readwrite");
      const store = transaction.objectStore(storeName);

      const request = store.add(note);

      request.onerror = () => {
        reject(`Erro ao adicionar nota ao banco de dados ${dbName}`);
      };

      request.onsuccess = (event) => {
        resolve(request.result);
      };
    });
  });
};

const updateNote = (dbName, storeName, noteId, updatedData) => {
  return openDB(dbName, storeName).then((db) => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readwrite");
      const store = transaction.objectStore(storeName);

      const request = store.put({ ...updatedData, id: noteId });

      request.onerror = () => {
        reject(`Erro ao atualizar nota no banco de dados ${dbName}`);
      };

      request.onsuccess = (event) => {
        resolve(request.result);
      };
    });
  });
};

const deleteNote = (dbName, storeName, noteId) => {
  return openDB(dbName, storeName).then((db) => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readwrite");
      const store = transaction.objectStore(storeName);

      const request = store.delete(noteId);

      request.onerror = () => {
        reject(`Erro ao excluir nota do banco de dados ${dbName}`);
      };

      request.onsuccess = (event) => {
        resolve(request.result);
      };
    });
  });
};

export { openDB, getAllNotes, getNote, addNote, updateNote, deleteNote };
