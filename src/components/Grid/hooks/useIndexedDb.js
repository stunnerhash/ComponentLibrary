import { useCallback, useEffect, useRef, useState } from "react"

export const useIndexedDb = () =>{
  const [storeId, setStoreId] = useState(null);
  useEffect(()=>{
    const newStoreId = Math.round(Math.random()*10000000).toString();
    createObjectStore(newStoreId);
    setStoreId(newStoreId);
    // return ()=> deleteObjectStore(newStoreId)
  },[]);
  
  return [storeId? IndexedCrud(storeId): null];
}

const dbName = 'Grid', dbVersion = 1;
const idb = 
  window.indexedDB || 
  window.mozindexedDB || 
  window.webindexedDB || 
  window.msindexedDB || 
  window.shimindexedDB;

export default useIndexedDb;

const createObjectStore = (storeId) => {
  console.log("create", storeId);
  if (!idb) {
    console.log("This browser doesn't support IndexedDB");
    return;
  }
  const request = idb.open(dbName, dbVersion + 1);
  request.onerror = function(event) {
    console.error("Database error: " + event.target.errorCode);
  };
  request.onupgradeneeded = function(event) {
  };

  request.onsuccess = function(event) {
    const db = event.target.result;
    if (!db.objectStoreNames.contains(storeId)) {
      const tx = db.transaction([], 'versionchange');
      tx.oncomplete = function() {
        console.log(`Object store '${storeId}' created successfully`);
      };
    } else {
      console.log(`Object store '${storeId}' already exists`);
    }
    
    db.close();
    console.log("Database closed successfully");
  };
};


// const deleteObjectStore = async (storeId) => {
//   console.log("delete storeId", storeId)
//   const request = idb.open(dbName, dbVersion);
//   request.onerror = function(event) {
//     console.error("Database error: " + event.target.errorCode);
//   };
//   request.onsuccess = function() {
    
//   };
//   request.onupgradeneeded = function() {
//     const db = request.result;
//     if(db.objectStoreNames.contains(storeId)){
//       db.deleteObjectStore(storeId)
//     }
//   };
// };

const IndexedCrud = (storeId) =>{
  console.log("Indexed crud storeId", storeId)
  const dbPromise = idb.open(dbName, dbVersion);
  let db, tx, store;
  dbPromise.onsuccess = () =>{
    db = dbPromise.result;
    // tx = db.transaction(storeId, 'readwrite')
    // store = tx.objectStore(storeId);
  }
  const get = (args)=>{
    
  }
  const post = (args)=>{
    
  }
  const put = (args)=>{
    // const response = store.put(args);
    // response.onsuccess = ()=>{
    //   tx.oncomplete = () =>{
    //     db.close();
    //   }
    //   alert("Data Saved Successfully");
    // }
    // response.onerror = (event)=>{
    //   alert("Error occured while loading initial data.");
    // }
  }
  const remove = (args)=>{
    
  }
  return { get, post, put, remove };
}
