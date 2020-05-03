import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
const config = {
  apiKey: "AIzaSyC9M5DKhT0HllyTXZfJaO5Acd9-5CbSAAI",
  authDomain: "task-b7075.firebaseapp.com",
  databaseURL: "https://task-b7075.firebaseio.com",
  projectId: "task-b7075",
  storageBucket: "task-b7075.appspot.com",
  messagingSenderId: "371463308812",
  appId: "1:371463308812:web:55471c50715836c97c9029",
  measurementId: "G-F5TDRSBX89"
};
export const firebaseApp = firebase.initializeApp(config);
export const usersRef = firebase.database().ref("users");
