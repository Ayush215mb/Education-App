import { initializeApp } from 'firebase/app';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import {ReactNativeAsyncStorage} from '@react-native-async-storage/async-storage'
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyC88SWnz7cN2q83vHT10Hsntv8qAK8fuNg",
    authDomain: "education-app-215.firebaseapp.com",
    projectId: "education-app-215",
    storageBucket: "education-app-215.appspot.com",
    messagingSenderId: "1005768439358",
    appId: "1:1005768439358:web:2e62b7117a45a13cc2436f",
    measurementId: "G-SLDNM6WYT6"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });

  export {app,auth};

