import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyC17CuOIyFthoofp2FyC7M6Nv_ZyxJe0kw",
  authDomain: "projects-856a4.firebaseapp.com",
  projectId: "projects-856a4",
  storageBucket: "projects-856a4.appspot.com",
  messagingSenderId: "995628739747",
  appId: "1:995628739747:web:a13ac86eb4ce528536a316"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
