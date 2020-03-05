import * as firebase from 'firebase/app';
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAdpOM4Bx2jIRTmqkLdxq2-WysYpZXW_BI",
    authDomain: "chatt-app-b6c9a.firebaseapp.com",
    databaseURL: "https://chatt-app-b6c9a.firebaseio.com",
    projectId: "chatt-app-b6c9a",
    storageBucket: "chatt-app-b6c9a.appspot.com",
    messagingSenderId: "999297534472",
    appId: "1:999297534472:web:5e2d45b432ecd04f385fbd",
    measurementId: "G-P2SMFJCGS3"
};

const Fire = firebase.initializeApp(config)

export default Fire;