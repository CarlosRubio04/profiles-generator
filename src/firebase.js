import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB8_B_aMhGQegMjP1OlNL0w6kfv0q98pV4",
  authDomain: "probando-react-724b6.firebaseapp.com",
  databaseURL: "https://probando-react-724b6.firebaseio.com",
  projectId: "probando-react-724b6",
  storageBucket: "probando-react-724b6.appspot.com",
  messagingSenderId: "117208821080",
  appId: "1:117208821080:web:d2fd6281912b000e"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
