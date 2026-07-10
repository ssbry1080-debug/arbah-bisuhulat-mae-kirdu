import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAgLbyqaXLyev-dyt3K2MysbxMsQcPxG1c",
  authDomain: "arbah-bisuhulat-mae-kirdu.firebaseapp.com",
  projectId: "arbah-bisuhulat-mae-kirdu",
  storageBucket: "arbah-bisuhulat-mae-kirdu.firebasestorage.app",
  messagingSenderId: "283220939343",
  appId: "1:283220939343:web:cdd52e9964316faa20503a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const email = document.getElementById("email");
const password = document.getElementById("password");

document.getElementById("signup").addEventListener("click", () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      alert("تم إنشاء الحساب بنجاح");
    })
    .catch((error) => {
      alert(error.message);
    });
});

document.getElementById("login").addEventListener("click", () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      alert("تم تسجيل الدخول بنجاح");
    })
    .catch((error) => {
      alert(error.message);
    });
});
