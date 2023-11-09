
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyDgcFLhkVzN3R-IZ4h2dl7popgKTt1d2uU",
    authDomain: "laprovencetaller.firebaseapp.com",
    projectId: "laprovencetaller",
    storageBucket: "laprovencetaller.appspot.com",
    messagingSenderId: "988065355052",
    appId: "1:988065355052:web:6d1136bc77a722b9318889"
  };


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);