import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getDocs, collection, getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";


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
const database = getFirestore(app);

const logoutButton = document.getElementById('logout-button');

logoutButton.addEventListener('click', () => {
    auth.signOut().then(() => {
        alert('You have been logged out.');
        window.location.href = 'index.html'; // Redirect to login page after logout
    }).catch((error) => {
        console.error('Error logging out:', error);
    });
});


const downloadbutton = document.getElementById('download-button');
if (downloadbutton) {
    downloadbutton.addEventListener('click', async function() {
        const querySnapshot = await getDocs(collection(database, 'registration'));
        const users = querySnapshot.docs.map(doc => ({
            ...doc.data()
        }));
        const filename = 'Details.xlsx';
        const worksheet = XLSX.utils.json_to_sheet(users);

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Emails');
        XLSX.writeFile(workbook, filename);
    });
}