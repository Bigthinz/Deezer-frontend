// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAfSYy7TMmrwORslYUKy_eCEYprOYLMkKQ',
  authDomain: 'deezer-269ab.firebaseapp.com',
  projectId: 'deezer-269ab',
  storageBucket: 'deezer-269ab.appspot.com',
  messagingSenderId: '41948041960',
  appId: '1:41948041960:web:1e2a0b01aeb7c0d8256f5d',
  measurementId: 'G-8WG3ZG5XF4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
