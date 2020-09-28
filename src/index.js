import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

const firebase = require('firebase');
require('firebase/firestore');

// Normalt sätt vill man inte lägga sin API-nyckel här men det funkar i testmiljöer
const firebaseConfig = { 
    apiKey: "AIzaSyAdpOM4Bx2jIRTmqkLdxq2-WysYpZXW_BI",
    authDomain: "chatt-app-b6c9a.firebaseapp.com",
    databaseURL: "https://chatt-app-b6c9a.firebaseio.com",
    projectId: "chatt-app-b6c9a",
    storageBucket: "chatt-app-b6c9a.appspot.com",
    messagingSenderId: "999297534472",
    appId: "1:999297534472:web:5e2d45b432ecd04f385fbd",
    measurementId: "G-P2SMFJCGS3"
};

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
    <BrowserRouter basename='https://rrudling.github.io/'>
      <App />
    </BrowserRouter>, 
    document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
