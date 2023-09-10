
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
  import { getDatabase} from "https://www.gstatic.com/firebasejs/9.0.1/firebase-database.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyAlHThYSHlo8H6WWDo8Wb6GE-9-JsTGBE4",
    authDomain: "signup-login-database-2abd3.firebaseapp.com",
    databaseURL: "https://signup-login-database-2abd3-default-rtdb.firebaseio.com",
    projectId: "signup-login-database-2abd3",
    storageBucket: "signup-login-database-2abd3.appspot.com",
    messagingSenderId: "310601890592",
    appId: "1:310601890592:web:b5cb8c0e055523d1b8f545",
    measurementId: "G-XCDF600820"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
