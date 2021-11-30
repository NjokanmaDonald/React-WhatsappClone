import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBsZa2Zt9OD42lrMJyc0SKTeFXU9Mt0nuU",
    authDomain: "whatsapp-clone-4ef06.firebaseapp.com",
    projectId: "whatsapp-clone-4ef06",
    storageBucket: "whatsapp-clone-4ef06.appspot.com",
    messagingSenderId: "216677370429",
    appId: "1:216677370429:web:47cb109c791546c0e2f854",
    measurementId: "G-Q8ZFTPZBRZ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;