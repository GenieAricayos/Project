import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDYee48Df22MhFIqODrJ2lPfCuXittHKlg",
  authDomain: "im2proj-aricayos.firebaseapp.com",
  projectId: "im2proj-aricayos",
  storageBucket: "im2proj-aricayos.appspot.com",
  messagingSenderId: "269971107576",
  appId: "1:269971107576:web:86ce07ca691aa71744150d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const logoutButton = document.getElementById('logout-button');

logoutButton.addEventListener('click', () => {
    auth.signOut().then(() => {
        alert('You have been logged out.');
        window.location.href = 'index.html'; // Redirect to login page after logout
    }).catch((error) => {
        console.error('Error logging out:', error);
    });
});