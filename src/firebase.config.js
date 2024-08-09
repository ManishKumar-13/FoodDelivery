import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD9thB_4jvDekMkArNvODE2LD2hMRHXgPY",
    authDomain: "fooddeliveryapp-600d2.firebaseapp.com",
    databaseURL: "https://fooddeliveryapp-600d2-default-rtdb.firebaseio.com",
    projectId: "fooddeliveryapp-600d2",
    storageBucket: "fooddeliveryapp-600d2.appspot.com",
    messagingSenderId: "150841491152",
    appId: "1:150841491152:web:d7662f46de0bb765a868d5"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };