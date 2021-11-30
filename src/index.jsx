import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

// Directories
// import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/styles.scss';

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBHBv6bOm-CfklcLcHrEMQtKTjPahnWczQ",
//   authDomain: "teammewtwo-3002b.firebaseapp.com",
//   projectId: "teammewtwo-3002b",
//   storageBucket: "teammewtwo-3002b.appspot.com",
//   messagingSenderId: "340276860693",
//   appId: "1:340276860693:web:166e29a435541dc8b0bb1c",
//   measurementId: "G-N4YWVTYKBY"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// console.log('INITIaLIZING')

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);