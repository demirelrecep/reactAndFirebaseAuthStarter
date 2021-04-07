// Bu kısım tamamen firebase dökümantasyonundan gelen kurulum ve initial işlemini içeriyor.
import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

const app = firebase.initializeApp(firebaseConfig);
export default app;

