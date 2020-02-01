import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
 let firebaseConfig = {
    apiKey: "AIzaSyA-xsicZCT6HcqcmJdB4J12naa1PrFOQmg",
    authDomain: "daily-measure.firebaseapp.com",
    databaseURL: "https://daily-measure.firebaseio.com",
    projectId: "daily-measure",
    storageBucket: "daily-measure.appspot.com",
    messagingSenderId: "155630307996",
    appId: "1:155630307996:web:7b41f4cfbca79eb86e3b59"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;