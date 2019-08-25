import firebase from 'firebase';
import '@firebase/firestore';
import ReduxSagaFirebase from 'redux-saga-firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA-Hrm3Z-S55DhqHq1cyQxBzY5gStCUTdY",
  authDomain: "bpgen-96d52.firebaseapp.com",
  databaseURL: "https://bpgen-96d52.firebaseio.com",
  projectId: "bpgen-96d52",
  storageBucket: "",
  messagingSenderId: "675413104497",
  appId: "1:675413104497:web:631d8d47a43ca1ee"
});

const firebaseConfig = new ReduxSagaFirebase(firebaseApp);

export default firebaseConfig;
