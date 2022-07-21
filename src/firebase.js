import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyCxEcy6eSeU1i9LxkxCaqrpy1dupGGfhbs",
    authDomain: "twitter-clone-b9996.firebaseapp.com",
    projectId: "twitter-clone-b9996",
    storageBucket: "twitter-clone-b9996.appspot.com",
    messagingSenderId: "849657280435",
    appId: "1:849657280435:web:b103acfeaf1fa523d9fdc6",
    measurementId: "G-PHM0S4TYBE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore()

  export default db;