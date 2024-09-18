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

  const submit = document.getElementById('submit');
  submit.addEventListener("click", function (event){
      event.preventDefault()
  
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Successfully Created Account!")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
  })