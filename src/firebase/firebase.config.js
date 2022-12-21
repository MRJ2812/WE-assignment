// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_authDomain,
//   authDomain: process.env.REACT_APP_apiKey,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDcDIlmBB5d0dH7lqJdX-je179D7sbZ7U8",
  authDomain: "weproject-de79f.firebaseapp.com",
  projectId: "weproject-de79f",
  storageBucket: "weproject-de79f.appspot.com",
  messagingSenderId: "761386981501",
  appId: "1:761386981501:web:e861898424162b16b33914"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;