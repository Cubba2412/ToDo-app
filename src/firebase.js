import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCqKtD_eI75mdhhmxOz1rLwWefMs6hjAJ8",
  authDomain: "todo-app-b5828.firebaseapp.com",
  databaseURL: "https://todo-app-b5828.firebaseio.com",
  projectId: "todo-app-b5828",
  storageBucket: "todo-app-b5828.appspot.com",
  messagingSenderId: "1045409917903",
  appId: "1:1045409917903:web:c52c91f1e1f11dc619c0ba"
});

const db = firebaseApp.firestore();

export default db;