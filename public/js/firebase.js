let firebaseConfig = {
  apiKey: "AIzaSyA0fujVoavu4PsWmawecuhmKXU-Tmb62g0",
  authDomain: "whynote-blog.firebaseapp.com",
  projectId: "whynote-blog",
  storageBucket: "whynote-blog.appspot.com",
  messagingSenderId: "877388922593",
  appId: "1:877388922593:web:23c9ac07963cb5e58d81a0",
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let auth = firebase.auth();
