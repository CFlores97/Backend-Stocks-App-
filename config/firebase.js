const firebase = require('firebase/compat/app')
require('firebase/compat/auth');
const dotenv = require('dotenv');
dotenv.config();


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
console.log('Firebase App Initialized:', firebaseApp.name);

const auth = firebaseApp.auth();
console.log('Auth Instance Initialized:', auth);

module.exports = {auth, firebaseApp};
