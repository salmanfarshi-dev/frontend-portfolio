import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAB-t0YxrkNBqs7sk4PvmCZj3d6aMJdW5M",
  authDomain: "portfolio-f0919.firebaseapp.com",
  projectId: "portfolio-f0919",
  storageBucket: "portfolio-f0919.firebasestorage.app",
  messagingSenderId: "1069610044688",
  appId: "1:1069610044688:web:2d60fa8adf26b969082995",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);