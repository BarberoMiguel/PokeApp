import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD9WkgMYriVffyn1eVIQ1lyFTOaQuqoYCo",
    authDomain: "movieapp-b2f13.firebaseapp.com",
    projectId: "movieapp-b2f13",
    storageBucket: "movieapp-b2f13.appspot.com",
    messagingSenderId: "986235048623",
    appId: "1:986235048623:web:0b3ed6f5e1c302ab56fa5a"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const signOut = async () => {
    try {
      await auth.signOut();
      console.log('Cierre de sesión exitoso');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signOut };