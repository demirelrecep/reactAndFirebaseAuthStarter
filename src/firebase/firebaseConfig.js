// Bu kısım tamamen firebase dökümantasyonundan gelen kurulum ve initial işlemini içeriyor.
import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC6f3Yxh6351u-3tx4RuTMycFkLZHgRDyw",
    authDomain: "rgaproject-38a15.firebaseapp.com",
    databaseURL: "https://rgaproject-38a15.firebaseio.com",
    projectId: "rgaproject-38a15",
    storageBucket: "rgaproject-38a15.appspot.com",
    messagingSenderId: "581027606258",
    appId: "1:581027606258:web:84c2d3087c7ca5e7b8aa6b",
    measurementId: "G-F3CQ5WTRYZ"
};

const app = firebase.initializeApp(firebaseConfig);
export default app;

