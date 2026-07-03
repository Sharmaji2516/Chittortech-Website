const { initializeApp } = require('firebase/app');
const { getFirestore, doc, getDoc } = require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyCjfLMuwyo4SY_uTjbMSPsEYagnydMPntE",
    authDomain: "chittor-tech.firebaseapp.com",
    projectId: "chittor-tech",
    storageBucket: "chittor-tech.firebasestorage.app",
    messagingSenderId: "7685535660",
    appId: "1:7685535660:web:bc2dae8715c9bb848bac09",
    measurementId: "G-K60TEX6DJ3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Attempting to read from Firestore...");
getDoc(doc(db, 'users', 'kushsharma.cor@gmail.com'))
  .then(doc => {
      console.log("Success! Exist:", doc.exists());
      if (doc.exists()) {
          console.log("Data:", doc.data());
      }
      process.exit(0);
  })
  .catch(err => {
      console.error("Failed:", err);
      process.exit(1);
  });
