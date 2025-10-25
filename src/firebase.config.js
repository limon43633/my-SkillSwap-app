// src/firebase.config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDIzHvNRJVZvahqvIhHdykEGPWmKVACOLM",
  authDomain: "my-skillswap01-app.firebaseapp.com",
  projectId: "my-skillswap01-app",
  storageBucket: "my-skillswap01-app.firebasestorage.app",
  messagingSenderId: "399055055104",
  appId: "1:399055055104:web:dd062dc07b62c17092ebe5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;